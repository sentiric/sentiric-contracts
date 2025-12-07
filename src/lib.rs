pub mod sentiric {
    // Çekirdek Modüller
    pub mod user { 
        pub mod v1 { 
            tonic::include_proto!("sentiric.user.v1"); 
        } 
    }
    pub mod dialplan { pub mod v1 { tonic::include_proto!("sentiric.dialplan.v1"); } }
    pub mod media { pub mod v1 { tonic::include_proto!("sentiric.media.v1"); } }
    pub mod event { pub mod v1 { tonic::include_proto!("sentiric.event.v1"); } }
    pub mod cdr { pub mod v1 { tonic::include_proto!("sentiric.cdr.v1"); } }

    // Veri Modülleri
    pub mod data { pub mod v1 { tonic::include_proto!("sentiric.data.v1"); } }
    
    // Kontrol ve Faturalama
    pub mod control { pub mod v1 { tonic::include_proto!("sentiric.control.v1"); } }
    pub mod billing { pub mod v1 { tonic::include_proto!("sentiric.billing.v1"); } }
    
    // AI Motorları (GÜNCELLENDİ)
    pub mod stt { pub mod v1 { tonic::include_proto!("sentiric.stt.v1"); } }
    pub mod tts { pub mod v1 { tonic::include_proto!("sentiric.tts.v1"); } }
    pub mod llm { pub mod v1 { tonic::include_proto!("sentiric.llm.v1"); } }

    // SIP
    pub mod sip { pub mod v1 { tonic::include_proto!("sentiric.sip.v1"); } }

    // Orkestrasyon
    pub mod agent { pub mod v1 { tonic::include_proto!("sentiric.agent.v1"); } }
    pub mod dialog { pub mod v1 { tonic::include_proto!("sentiric.dialog.v1"); } }
    pub mod telephony { pub mod v1 { tonic::include_proto!("sentiric.telephony.v1"); } }

    // Bilgi ve Harici Servisler
    pub mod knowledge { pub mod v1 { tonic::include_proto!("sentiric.knowledge.v1"); } }
    pub mod external { pub mod v1 { tonic::include_proto!("sentiric.external.v1"); } }
    
    // Dikey Servisler
    pub mod vertical { pub mod v1 { tonic::include_proto!("sentiric.vertical.v1"); } }
}