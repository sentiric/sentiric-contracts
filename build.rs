// ========== sentiric-contracts/build.rs ==========
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        // --- YENİ EKLENEN SATIR ---
        .protoc_arg("--experimental_allow_proto3_optional") // Bu, 'optional' anahtar kelimesine izin verir.
        .compile(
            &[
                "proto/sentiric/user/v1/user.proto",
                "proto/sentiric/dialplan/v1/dialplan.proto",
                "proto/sentiric/media/v1/media.proto",
                "proto/sentiric/tts/v1/tts.proto",
            ],
            &["proto"],
        )?;
    Ok(())
}