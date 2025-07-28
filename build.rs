fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("cargo:rerun-if-changed=proto");

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        // BU KISIM TÜM İŞİ YAPIYOR:
        // Hem kendi tiplerimize hem de Google'ın tiplerine `serde` özelliklerini ekliyor.
        // `prost-types`'ın `serde` özelliği aktif olduğu için, `Struct` gibi tipler
        // için doğru `serde` implementasyonunu otomatik olarak kullanacaktır.
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