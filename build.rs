// DOKÜMANTASYONDAN ALINAN, DOĞRU VE ÇALIŞAN build.rs
use prost_wkt_build::{FileDescriptorSet};
use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("cargo:rerun-if-changed=proto");

    let out = PathBuf::from(env::var("OUT_DIR").unwrap());
    let descriptor_file = out.join("descriptors.bin");

    let protos = &[
        "proto/sentiric/user/v1/user.proto",
        "proto/sentiric/dialplan/v1/dialplan.proto",
        "proto/sentiric/media/v1/media.proto",
    ];
    let proto_includes = &["proto"];

    // 1. ADIM: Normal prost/tonic derlemesi (descriptor_set oluşturarak)
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .extern_path(".google.protobuf.Struct", "::prost_wkt_types::Struct")
        .extern_path(".google.protobuf.Value", "::prost_wkt_types::Value")
        .extern_path(".google.protobuf.ListValue", "::prost_wkt_types::ListValue")
        .extern_path(".google.protobuf.Timestamp", "::prost_wkt_types::Timestamp")
        .file_descriptor_set_path(&descriptor_file)
        .compile(protos, proto_includes)?;

    // 2. ADIM: Üretilen kodun serde implementasyonlarını WKT için düzelt
    let descriptor_bytes = std::fs::read(descriptor_file)?;
    let descriptor = FileDescriptorSet::decode(&descriptor_bytes[..])?;

    prost_wkt_build::add_serde(out, descriptor);

    Ok(())
}