pub mod sentiric {
    pub mod user { pub mod v1 { tonic::include_proto!("sentiric.user.v1"); } }
    pub mod dialplan { pub mod v1 { tonic::include_proto!("sentiric.dialplan.v1"); } }
    pub mod media { pub mod v1 { tonic::include_proto!("sentiric.media.v1"); } }
    pub mod tts { pub mod v1 { tonic::include_proto!("sentiric.tts.v1"); } }
    pub mod event { pub mod v1 { tonic::include_proto!("sentiric.event.v1"); } }
    pub mod knowledge { pub mod v1 { tonic::include_proto!("sentiric.knowledge.v1"); } }
    // --- YENİ SATIR ---
    pub mod sip { pub mod v1 { tonic::include_proto!("sentiric.sip.v1"); } }
}