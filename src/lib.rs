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