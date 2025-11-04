fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        
        // 1. KRİTİK FİNAL ÇÖZÜMÜ: Wildcard use ile serde attribute'lerinin kapsamını zorluyoruz.
        .type_attribute("sentiric", "#[allow(clippy::all)] #[allow(unused)] use serde::*;")
        
        // 2. Tüm Serde attribute'larını tek bir derive içinde zorla kullanıyoruz
        .type_attribute("sentiric", "#[derive(serde::Serialize, serde::Deserialize)] #[serde(rename_all = \"camelCase\")]")
        
        // KRİTİK DEĞİŞİKLİK: Manuel .field_attribute Serde skip'leri tamamen kaldırıldı.
        // Hatanın kaynağı buydu. Rust'ın WKT'leri otomatik olarak işlemesini bekliyoruz.

        .protoc_arg("--experimental_allow_proto3_optional")
        .compile(
            &[
                // Tüm proto dosyalarının listesi (Değişmedi)
                "sentiric/user/v1/user.proto",
                "sentiric/dialplan/v1/dialplan.proto",
                "sentiric/media/v1/media.proto", 
                "sentiric/tts/v1/tts.proto",
                "sentiric/event/v1/event.proto",
                "sentiric/data/v1/context.proto",
                "sentiric/data/v1/schema.proto",
                "sentiric/data/v1/config.proto",
                "sentiric/data/v1/asset.proto",
                "sentiric/control/v1/observability.proto",
                "sentiric/billing/v1/billing.proto",
                "sentiric/control/v1/license.proto",
                "sentiric/external/v1/marketplace.proto",
                "sentiric/user/v1/identity.proto",
                "sentiric/stt/v1/gateway.proto",
                "sentiric/llm/v1/gateway.proto",
                "sentiric/llm/v1/local.proto",
                "sentiric/sip/v1/signaling.proto",
                "sentiric/sip/v1/sbc.proto",
                "sentiric/sip/v1/proxy.proto",
                "sentiric/sip/v1/gateway.proto",
                "sentiric/sip/v1/registrar.proto",
                "sentiric/sip/v1/b2bua.proto",
                "sentiric/agent/v1/orchestration.proto",
                "sentiric/dialog/v1/dialog.proto",
                "sentiric/telephony/v1/action.proto", 
                "sentiric/tts/v1/edge.proto",
                "sentiric/stt/v1/whisper.proto", // <-- YENİ EKLENDİ
                "sentiric/cdr/v1/cdr.proto",
                "sentiric/external/v1/connector.proto",
                "sentiric/control/v1/task.proto",
                "sentiric/knowledge/v1/query.proto", 
                "sentiric/knowledge/v1/indexing.proto",
                "sentiric/external/v1/payment.proto",
                "sentiric/external/v1/notification.proto",
                "sentiric/external/v1/scheduling.proto",
                "sentiric/vertical/v1/hospitality.proto",
                "sentiric/vertical/v1/health.proto",
                "sentiric/vertical/v1/ecommerce.proto",
                "sentiric/vertical/v1/legal.proto",
                "sentiric/vertical/v1/public.proto",
                "sentiric/vertical/v1/finance.proto",
            ],
            &["proto"],
        )?;
    Ok(())
}