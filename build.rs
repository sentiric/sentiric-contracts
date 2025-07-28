fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("cargo:rerun-if-changed=proto");

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        // KENDİ MESAJLARIMIZ İÇİN SERDE'Yİ TÜRET
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        
        // GOOGLE'IN TİPLERİ İÇİN SERDE'Yİ NEREDE BULACAĞINI MANUEL OLARAK SÖYLE
        .type_attribute("google.protobuf.Struct", "#[serde(with = \"prost_wkt_serde\")]")
        .type_attribute("google.protobuf.Timestamp", "#[serde(with = \"prost_wkt_serde\")]")
        .type_attribute("google.protobuf.Value", "#[serde(with = \"prost_wkt_serde\")]")
        
        .compile(
            &[
                "proto/sentiric/user/v1/user.proto",
                "proto/sentiric/dialplan/v1/dialplan.proto",
                "proto/sentiric/media/v1/media.proto",
            ],
            &["proto"],
        )?;

    Ok(())
}