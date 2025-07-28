fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("cargo:rerun-if-changed=proto");

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        // YENİ EKLENEN SATIRLAR:
        // Tüm mesaj (message) tipleri için serde::Serialize ve serde::Deserialize özelliklerini türet.
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
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