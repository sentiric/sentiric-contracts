fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        
        // Kural 1: Bizim tanımladığımız tüm mesajlara serde derive ekle.
        // Bu, google.protobuf.* dışındaki her şeye uygulanır.
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .type_attribute(".", "#[serde(rename_all = \"camelCase\")]")
        
        // Kural 2: Google'ın tipleri için, yukarıdaki genel kuralı geçersiz kıl
        // ve HİÇBİR şey yapma. prost-types zaten serde desteği sağlıyor (eğer feature aktifse).
        // Eğer değilse bile, en azından derleme hatası almayız.
        .type_attribute("google.protobuf.FieldMask", "#[serde(skip)]") // Bu tipleri serde'den tamamen atla
        .type_attribute("google.protobuf.Timestamp", "#[serde(skip)]") // Bu tipleri serde'den tamamen atla

        .protoc_arg("--experimental_allow_proto3_optional")
        .compile(
            &[
                "sentiric/user/v1/user.proto",
                "sentiric/dialplan/v1/dialplan.proto",
                "sentiric/media/v1/media.proto",
                "sentiric/tts/v1/tts.proto",
                "sentiric/event/v1/event.proto",
            ],
            &["proto"],
        )?;
    Ok(())
}