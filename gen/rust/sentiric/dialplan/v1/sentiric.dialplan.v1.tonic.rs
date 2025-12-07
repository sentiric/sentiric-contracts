// @generated
/// Generated client implementations.
pub mod dialplan_service_client {
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
    pub struct DialplanServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl DialplanServiceClient<tonic::transport::Channel> {
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
    impl<T> DialplanServiceClient<T>
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
        ) -> DialplanServiceClient<InterceptedService<T, F>>
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
            DialplanServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn resolve_dialplan(
            &mut self,
            request: impl tonic::IntoRequest<super::ResolveDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ResolveDialplanResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/ResolveDialplan",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "ResolveDialplan",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_inbound_route(
            &mut self,
            request: impl tonic::IntoRequest<super::CreateInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateInboundRouteResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/CreateInboundRoute",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "CreateInboundRoute",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_inbound_route(
            &mut self,
            request: impl tonic::IntoRequest<super::GetInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetInboundRouteResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/GetInboundRoute",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "GetInboundRoute",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_inbound_route(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UpdateInboundRouteResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/UpdateInboundRoute",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "UpdateInboundRoute",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn delete_inbound_route(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteInboundRouteResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/DeleteInboundRoute",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "DeleteInboundRoute",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_inbound_routes(
            &mut self,
            request: impl tonic::IntoRequest<super::ListInboundRoutesRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListInboundRoutesResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/ListInboundRoutes",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "ListInboundRoutes",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_dialplan(
            &mut self,
            request: impl tonic::IntoRequest<super::CreateDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateDialplanResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/CreateDialplan",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "CreateDialplan",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_dialplan(
            &mut self,
            request: impl tonic::IntoRequest<super::GetDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetDialplanResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/GetDialplan",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "GetDialplan",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_dialplan(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UpdateDialplanResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/UpdateDialplan",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "UpdateDialplan",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn delete_dialplan(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteDialplanResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/DeleteDialplan",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "DeleteDialplan",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_dialplans(
            &mut self,
            request: impl tonic::IntoRequest<super::ListDialplansRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListDialplansResponse>,
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
                "/sentiric.dialplan.v1.DialplanService/ListDialplans",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "sentiric.dialplan.v1.DialplanService",
                        "ListDialplans",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod dialplan_service_server {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with DialplanServiceServer.
    #[async_trait]
    pub trait DialplanService: std::marker::Send + std::marker::Sync + 'static {
        async fn resolve_dialplan(
            &self,
            request: tonic::Request<super::ResolveDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ResolveDialplanResponse>,
            tonic::Status,
        >;
        async fn create_inbound_route(
            &self,
            request: tonic::Request<super::CreateInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateInboundRouteResponse>,
            tonic::Status,
        >;
        async fn get_inbound_route(
            &self,
            request: tonic::Request<super::GetInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetInboundRouteResponse>,
            tonic::Status,
        >;
        async fn update_inbound_route(
            &self,
            request: tonic::Request<super::UpdateInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UpdateInboundRouteResponse>,
            tonic::Status,
        >;
        async fn delete_inbound_route(
            &self,
            request: tonic::Request<super::DeleteInboundRouteRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteInboundRouteResponse>,
            tonic::Status,
        >;
        async fn list_inbound_routes(
            &self,
            request: tonic::Request<super::ListInboundRoutesRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListInboundRoutesResponse>,
            tonic::Status,
        >;
        async fn create_dialplan(
            &self,
            request: tonic::Request<super::CreateDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateDialplanResponse>,
            tonic::Status,
        >;
        async fn get_dialplan(
            &self,
            request: tonic::Request<super::GetDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetDialplanResponse>,
            tonic::Status,
        >;
        async fn update_dialplan(
            &self,
            request: tonic::Request<super::UpdateDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UpdateDialplanResponse>,
            tonic::Status,
        >;
        async fn delete_dialplan(
            &self,
            request: tonic::Request<super::DeleteDialplanRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteDialplanResponse>,
            tonic::Status,
        >;
        async fn list_dialplans(
            &self,
            request: tonic::Request<super::ListDialplansRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListDialplansResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct DialplanServiceServer<T> {
        inner: Arc<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    impl<T> DialplanServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for DialplanServiceServer<T>
    where
        T: DialplanService,
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
                "/sentiric.dialplan.v1.DialplanService/ResolveDialplan" => {
                    #[allow(non_camel_case_types)]
                    struct ResolveDialplanSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::ResolveDialplanRequest>
                    for ResolveDialplanSvc<T> {
                        type Response = super::ResolveDialplanResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ResolveDialplanRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::resolve_dialplan(&inner, request)
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
                        let method = ResolveDialplanSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/CreateInboundRoute" => {
                    #[allow(non_camel_case_types)]
                    struct CreateInboundRouteSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::CreateInboundRouteRequest>
                    for CreateInboundRouteSvc<T> {
                        type Response = super::CreateInboundRouteResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreateInboundRouteRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::create_inbound_route(
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
                        let method = CreateInboundRouteSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/GetInboundRoute" => {
                    #[allow(non_camel_case_types)]
                    struct GetInboundRouteSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::GetInboundRouteRequest>
                    for GetInboundRouteSvc<T> {
                        type Response = super::GetInboundRouteResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetInboundRouteRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::get_inbound_route(&inner, request)
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
                        let method = GetInboundRouteSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/UpdateInboundRoute" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateInboundRouteSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::UpdateInboundRouteRequest>
                    for UpdateInboundRouteSvc<T> {
                        type Response = super::UpdateInboundRouteResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateInboundRouteRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::update_inbound_route(
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
                        let method = UpdateInboundRouteSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/DeleteInboundRoute" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteInboundRouteSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::DeleteInboundRouteRequest>
                    for DeleteInboundRouteSvc<T> {
                        type Response = super::DeleteInboundRouteResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteInboundRouteRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::delete_inbound_route(
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
                        let method = DeleteInboundRouteSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/ListInboundRoutes" => {
                    #[allow(non_camel_case_types)]
                    struct ListInboundRoutesSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::ListInboundRoutesRequest>
                    for ListInboundRoutesSvc<T> {
                        type Response = super::ListInboundRoutesResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListInboundRoutesRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::list_inbound_routes(&inner, request)
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
                        let method = ListInboundRoutesSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/CreateDialplan" => {
                    #[allow(non_camel_case_types)]
                    struct CreateDialplanSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::CreateDialplanRequest>
                    for CreateDialplanSvc<T> {
                        type Response = super::CreateDialplanResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreateDialplanRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::create_dialplan(&inner, request)
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
                        let method = CreateDialplanSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/GetDialplan" => {
                    #[allow(non_camel_case_types)]
                    struct GetDialplanSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::GetDialplanRequest>
                    for GetDialplanSvc<T> {
                        type Response = super::GetDialplanResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetDialplanRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::get_dialplan(&inner, request).await
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
                        let method = GetDialplanSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/UpdateDialplan" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateDialplanSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::UpdateDialplanRequest>
                    for UpdateDialplanSvc<T> {
                        type Response = super::UpdateDialplanResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateDialplanRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::update_dialplan(&inner, request)
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
                        let method = UpdateDialplanSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/DeleteDialplan" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteDialplanSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::DeleteDialplanRequest>
                    for DeleteDialplanSvc<T> {
                        type Response = super::DeleteDialplanResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteDialplanRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::delete_dialplan(&inner, request)
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
                        let method = DeleteDialplanSvc(inner);
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
                "/sentiric.dialplan.v1.DialplanService/ListDialplans" => {
                    #[allow(non_camel_case_types)]
                    struct ListDialplansSvc<T: DialplanService>(pub Arc<T>);
                    impl<
                        T: DialplanService,
                    > tonic::server::UnaryService<super::ListDialplansRequest>
                    for ListDialplansSvc<T> {
                        type Response = super::ListDialplansResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListDialplansRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as DialplanService>::list_dialplans(&inner, request)
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
                        let method = ListDialplansSvc(inner);
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
    impl<T> Clone for DialplanServiceServer<T> {
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
    pub const SERVICE_NAME: &str = "sentiric.dialplan.v1.DialplanService";
    impl<T> tonic::server::NamedService for DialplanServiceServer<T> {
        const NAME: &'static str = SERVICE_NAME;
    }
}
