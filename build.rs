fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        
        // 1. KRİTİK FİNAL ÇÖZÜMÜ: Wildcard use ile serde attribute'lerinin kapsamını zorluyoruz.
        .type_attribute("sentiric", "#[allow(clippy::all)] #[allow(unused)] use serde::*;")
        
        // 2. Tüm Serde attribute'larını tek bir derive içinde zorla kullanıyoruz
        .type_attribute("sentiric", "#[derive(serde::Serialize, serde::Deserialize)] #[serde(rename_all = \"camelCase\")]")
        
        // Proto3 Optional desteği
        .protoc_arg("--experimental_allow_proto3_optional")
        
        .compile(
            &[
                // --- CORE INFRASTRUCTURE ---
                "sentiric/user/v1/user.proto",
                "sentiric/user/v1/identity.proto",
                "sentiric/dialplan/v1/dialplan.proto",
                "sentiric/media/v1/media.proto", 
                "sentiric/event/v1/event.proto",
                "sentiric/cdr/v1/cdr.proto",
                
                // --- DATA LAYER ---
                "sentiric/data/v1/context.proto",
                "sentiric/data/v1/schema.proto",
                "sentiric/data/v1/config.proto",
                "sentiric/data/v1/asset.proto",
                
                // --- CONTROL & BILLING ---
                "sentiric/control/v1/observability.proto",
                "sentiric/billing/v1/billing.proto",
                "sentiric/control/v1/license.proto",
                "sentiric/control/v1/task.proto",
                
                // --- AI ENGINES (REFACTORED) ---
                // STT
                "sentiric/stt/v1/gateway.proto",
                "sentiric/stt/v1/whisper.proto",
                
                // TTS
                "sentiric/tts/v1/gateway.proto",  // Genel TTS Arayüzü
                "sentiric/tts/v1/coqui.proto",    // Coqui XTTS Spesifik
                "sentiric/tts/v1/edge.proto",     // Edge/Cloud TTS Spesifik
                "sentiric/tts/v1/mms.proto",     // MMS TTS Spesifik
                
                // LLM
                "sentiric/llm/v1/gateway.proto",  // Genel LLM Arayüzü
                "sentiric/llm/v1/llama.proto",    // Llama.cpp Spesifik (Eski local.proto)
                
                // --- SIP STACK ---
                "sentiric/sip/v1/signaling.proto",
                "sentiric/sip/v1/sbc.proto",
                "sentiric/sip/v1/proxy.proto",
                "sentiric/sip/v1/gateway.proto",
                "sentiric/sip/v1/registrar.proto",
                "sentiric/sip/v1/b2bua.proto",
                
                // --- ORCHESTRATION ---
                "sentiric/agent/v1/orchestration.proto",
                "sentiric/dialog/v1/dialog.proto",
                "sentiric/telephony/v1/action.proto", 
                
                // --- KNOWLEDGE & RAG ---
                "sentiric/knowledge/v1/query.proto", 
                "sentiric/knowledge/v1/indexing.proto",
                
                // --- EXTERNAL INTEGRATIONS ---
                "sentiric/external/v1/marketplace.proto",
                "sentiric/external/v1/connector.proto",
                "sentiric/external/v1/payment.proto",
                "sentiric/external/v1/notification.proto",
                "sentiric/external/v1/scheduling.proto",
                
                // --- VERTICALS ---
                "sentiric/vertical/v1/hospitality.proto",
                "sentiric/vertical/v1/health.proto",
                "sentiric/vertical/v1/ecommerce.proto",
                "sentiric/vertical/v1/legal.proto",
                "sentiric/vertical/v1/public.proto",
                "sentiric/vertical/v1/finance.proto",

                 // --- STREAM ---
                 "sentiric/stream/v1/gateway.proto",
            ],
            &["proto"],
        )?;
    Ok(())
}