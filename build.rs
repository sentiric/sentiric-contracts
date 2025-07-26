fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("cargo:rerun-if-changed=proto");

    tonic_build::configure()
        // Hem sunucu hem istemci kodunu üret
        .build_server(true)
        .build_client(true)
        .compile(
            &[
                "proto/sentiric/user/v1/user.proto",
                "proto/sentiric/dialplan/v1/dialplan.proto",
                "proto/sentiric/media/v1/media.proto",
            ],
            &["proto"], // .proto dosyalarının aranacağı kök dizin
        )?;

    Ok(())
}