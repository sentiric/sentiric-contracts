// Bu dosya, build.rs tarafından 'target' klasörü içinde üretilen
// kodları bulup, bu kütüphaneyi kullanan diğer projelere "public"
// olarak açar (export eder).

// tonic::include_proto! makrosu, OUT_DIR içindeki .rs dosyalarını bulur.
// "sentiric" namespace'i altındaki her şeyi içeren bir modül oluşturuyoruz.
pub mod sentiric {
    pub mod user {
        pub mod v1 {
            tonic::include_proto!("sentiric.user.v1");
        }
    }
    pub mod dialplan {
        pub mod v1 {
            tonic::include_proto!("sentiric.dialplan.v1");
        }
    }
    pub mod media {
        pub mod v1 {
            tonic::include_proto!("sentiric.media.v1");
        }
    }
}