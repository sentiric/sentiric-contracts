// @generated
/// Generated client implementations.
pub mod telephony_action_service_client {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct TelephonyActionServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl TelephonyActionServiceClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> TelephonyActionServiceClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::Body>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + std::marker::Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + std::marker::Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> TelephonyActionServiceClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::Body>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::Body>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::Body>,
            >>::Error: Into<StdError> + std::marker::Send + std::marker::Sync,
        {
            TelephonyActionServiceClient::new(
                InterceptedService::new(inner, interceptor),
            )
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_decoding_message_size(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_encoding_message_size(limit);
            self
        }
        pub async fn play_audio(
            &mut self,
            request: impl tonic::IntoRequest<super::PlayAudioRequest>,
        ) -> std::result::Result<
            tonic::Response<super::PlayAudioResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/PlayAudio",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "PlayAudio",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn terminate_call(
            &mut self,
            request: impl tonic::IntoRequest<super::TerminateCallRequest>,
        ) -> std::result::Result<
            tonic::Response<super::TerminateCallResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/TerminateCall",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "TerminateCall",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn send_text_message(
            &mut self,
            request: impl tonic::IntoRequest<super::SendTextMessageRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SendTextMessageResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/SendTextMessage",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "SendTextMessage",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn start_recording(
            &mut self,
            request: impl tonic::IntoRequest<super::StartRecordingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::StartRecordingResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/StartRecording",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "StartRecording",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn stop_recording(
            &mut self,
            request: impl tonic::IntoRequest<super::StopRecordingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::StopRecordingResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/StopRecording",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "StopRecording",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn run_pipeline(
            &mut self,
            request: impl tonic::IntoRequest<super::RunPipelineRequest>,
        ) -> std::result::Result<
            tonic::Response<tonic::codec::Streaming<super::RunPipelineResponse>>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/RunPipeline",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "RunPipeline",
                    ),
                );
            self.inner.server_streaming(req, path, codec).await
        }
        pub async fn speak_text(
            &mut self,
            request: impl tonic::IntoRequest<super::SpeakTextRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SpeakTextResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/SpeakText",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "SpeakText",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn bridge_call(
            &mut self,
            request: impl tonic::IntoRequest<super::BridgeCallRequest>,
        ) -> std::result::Result<
            tonic::Response<super::BridgeCallResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/sentiric.telephony.v1.TelephonyActionService/BridgeCall",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.telephony.v1.TelephonyActionService",
                        "BridgeCall",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod telephony_action_service_server {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with TelephonyActionServiceServer.
    #[async_trait]
    pub trait TelephonyActionService: std::marker::Send + std::marker::Sync + 'static {
        async fn play_audio(
            &self,
            request: tonic::Request<super::PlayAudioRequest>,
        ) -> std::result::Result<
            tonic::Response<super::PlayAudioResponse>,
            tonic::Status,
        >;
        async fn terminate_call(
            &self,
            request: tonic::Request<super::TerminateCallRequest>,
        ) -> std::result::Result<
            tonic::Response<super::TerminateCallResponse>,
            tonic::Status,
        >;
        async fn send_text_message(
            &self,
            request: tonic::Request<super::SendTextMessageRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SendTextMessageResponse>,
            tonic::Status,
        >;
        async fn start_recording(
            &self,
            request: tonic::Request<super::StartRecordingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::StartRecordingResponse>,
            tonic::Status,
        >;
        async fn stop_recording(
            &self,
            request: tonic::Request<super::StopRecordingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::StopRecordingResponse>,
            tonic::Status,
        >;
        /// Server streaming response type for the RunPipeline method.
        type RunPipelineStream: tonic::codegen::tokio_stream::Stream<
                Item = std::result::Result<super::RunPipelineResponse, tonic::Status>,
            >
            + std::marker::Send
            + 'static;
        async fn run_pipeline(
            &self,
            request: tonic::Request<super::RunPipelineRequest>,
        ) -> std::result::Result<
            tonic::Response<Self::RunPipelineStream>,
            tonic::Status,
        >;
        async fn speak_text(
            &self,
            request: tonic::Request<super::SpeakTextRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SpeakTextResponse>,
            tonic::Status,
        >;
        async fn bridge_call(
            &self,
            request: tonic::Request<super::BridgeCallRequest>,
        ) -> std::result::Result<
            tonic::Response<super::BridgeCallResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct TelephonyActionServiceServer<T> {
        inner: Arc<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    impl<T> TelephonyActionServiceServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
                max_decoding_message_size: None,
                max_encoding_message_size: None,
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.max_decoding_message_size = Some(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.max_encoding_message_size = Some(limit);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>>
    for TelephonyActionServiceServer<T>
    where
        T: TelephonyActionService,
        B: Body + std::marker::Send + 'static,
        B::Error: Into<StdError> + std::marker::Send + 'static,
    {
        type Response = http::Response<tonic::body::Body>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<std::result::Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            match req.uri().path() {
                "/sentiric.telephony.v1.TelephonyActionService/PlayAudio" => {
                    #[allow(non_camel_case_types)]
                    struct PlayAudioSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::PlayAudioRequest>
                    for PlayAudioSvc<T> {
                        type Response = super::PlayAudioResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::PlayAudioRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::play_audio(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = PlayAudioSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/TerminateCall" => {
                    #[allow(non_camel_case_types)]
                    struct TerminateCallSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::TerminateCallRequest>
                    for TerminateCallSvc<T> {
                        type Response = super::TerminateCallResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::TerminateCallRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::terminate_call(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = TerminateCallSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/SendTextMessage" => {
                    #[allow(non_camel_case_types)]
                    struct SendTextMessageSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::SendTextMessageRequest>
                    for SendTextMessageSvc<T> {
                        type Response = super::SendTextMessageResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::SendTextMessageRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::send_text_message(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = SendTextMessageSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/StartRecording" => {
                    #[allow(non_camel_case_types)]
                    struct StartRecordingSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::StartRecordingRequest>
                    for StartRecordingSvc<T> {
                        type Response = super::StartRecordingResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::StartRecordingRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::start_recording(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = StartRecordingSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/StopRecording" => {
                    #[allow(non_camel_case_types)]
                    struct StopRecordingSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::StopRecordingRequest>
                    for StopRecordingSvc<T> {
                        type Response = super::StopRecordingResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::StopRecordingRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::stop_recording(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = StopRecordingSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/RunPipeline" => {
                    #[allow(non_camel_case_types)]
                    struct RunPipelineSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::ServerStreamingService<super::RunPipelineRequest>
                    for RunPipelineSvc<T> {
                        type Response = super::RunPipelineResponse;
                        type ResponseStream = T::RunPipelineStream;
                        type Future = BoxFuture<
                            tonic::Response<Self::ResponseStream>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RunPipelineRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::run_pipeline(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = RunPipelineSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/SpeakText" => {
                    #[allow(non_camel_case_types)]
                    struct SpeakTextSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::SpeakTextRequest>
                    for SpeakTextSvc<T> {
                        type Response = super::SpeakTextResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::SpeakTextRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::speak_text(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = SpeakTextSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/sentiric.telephony.v1.TelephonyActionService/BridgeCall" => {
                    #[allow(non_camel_case_types)]
                    struct BridgeCallSvc<T: TelephonyActionService>(pub Arc<T>);
                    impl<
                        T: TelephonyActionService,
                    > tonic::server::UnaryService<super::BridgeCallRequest>
                    for BridgeCallSvc<T> {
                        type Response = super::BridgeCallResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::BridgeCallRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as TelephonyActionService>::bridge_call(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = BridgeCallSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        let mut response = http::Response::new(
                            tonic::body::Body::default(),
                        );
                        let headers = response.headers_mut();
                        headers
                            .insert(
                                tonic::Status::GRPC_STATUS,
                                (tonic::Code::Unimplemented as i32).into(),
                            );
                        headers
                            .insert(
                                http::header::CONTENT_TYPE,
                                tonic::metadata::GRPC_CONTENT_TYPE,
                            );
                        Ok(response)
                    })
                }
            }
        }
    }
    impl<T> Clone for TelephonyActionServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
                max_decoding_message_size: self.max_decoding_message_size,
                max_encoding_message_size: self.max_encoding_message_size,
            }
        }
    }
    /// Generated gRPC service name
    pub const SERVICE_NAME: &str = "sentiric.telephony.v1.TelephonyActionService";
    impl<T> tonic::server::NamedService for TelephonyActionServiceServer<T> {
        const NAME: &'static str = SERVICE_NAME;
    }
}
