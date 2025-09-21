fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        
        // Kural 1: Bizim tanımladığımız tüm mesajlara serde derive'larını ekle.
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .type_attribute(".", "#[serde(rename_all = \"camelCase\")]")
        
        // Kural 2: Serde desteği olmayan Google tiplerini içeren alanları
        // serileştirme işleminden atla. Bu, alan bazında yapılır.
        // FieldMask alanları için:
        .field_attribute("sentiric.user.v1.UpdateUserRequest.update_mask", "#[serde(skip)]")
        .field_attribute("sentiric.user.v1.UpdateContactRequest.update_mask", "#[serde(skip)]")
        
        // Timestamp alanları için:
        .field_attribute("sentiric.event.v1.CallStartedEvent.timestamp", "#[serde(skip)]")
        .field_attribute("sentiric.event.v1.UserIdentifiedForCallEvent.timestamp", "#[serde(skip)]")
        .field_attribute("sentiric.event.v1.CallRecordingAvailableEvent.timestamp", "#[serde(skip)]")
        .field_attribute("sentiric.event.v1.CallEndedEvent.timestamp", "#[serde(skip)]")

        .protoc_arg("--experimental_allow_proto3_optional")
        .compile(
            &[
                "sentiric/user/v1/user.proto",
                "sentiric/dialplan/v1/dialplan.proto",
                "sentiric/media/v1/media.proto",
                "sentiric/tts/v1/tts.proto",
                "sentiric/event/v1/event.proto",
                "sentiric/knowledge/v1/knowledge.proto",
                "sentiric/sip/v1/signaling.proto", // YENİ SATIR
            ],
            &["proto"],
        )?;
    Ok(())
}