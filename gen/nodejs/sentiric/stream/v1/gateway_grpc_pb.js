// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_stream_v1_gateway_pb = require('../../../sentiric/stream/v1/gateway_pb.js');

function serialize_sentiric_stream_v1_StreamSessionRequest(arg) {
  if (!(arg instanceof sentiric_stream_v1_gateway_pb.StreamSessionRequest)) {
    throw new Error('Expected argument of type sentiric.stream.v1.StreamSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stream_v1_StreamSessionRequest(buffer_arg) {
  return sentiric_stream_v1_gateway_pb.StreamSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stream_v1_StreamSessionResponse(arg) {
  if (!(arg instanceof sentiric_stream_v1_gateway_pb.StreamSessionResponse)) {
    throw new Error('Expected argument of type sentiric.stream.v1.StreamSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stream_v1_StreamSessionResponse(buffer_arg) {
  return sentiric_stream_v1_gateway_pb.StreamSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DEĞİŞİKLİK: MobileGatewayService -> StreamGatewayService
var StreamGatewayServiceService = exports.StreamGatewayServiceService = {
  streamSession: {
    path: '/sentiric.stream.v1.StreamGatewayService/StreamSession',
    requestStream: true,
    responseStream: true,
    requestType: sentiric_stream_v1_gateway_pb.StreamSessionRequest,
    responseType: sentiric_stream_v1_gateway_pb.StreamSessionResponse,
    requestSerialize: serialize_sentiric_stream_v1_StreamSessionRequest,
    requestDeserialize: deserialize_sentiric_stream_v1_StreamSessionRequest,
    responseSerialize: serialize_sentiric_stream_v1_StreamSessionResponse,
    responseDeserialize: deserialize_sentiric_stream_v1_StreamSessionResponse,
  },
};

exports.StreamGatewayServiceClient = grpc.makeGenericClientConstructor(StreamGatewayServiceService, 'StreamGatewayService');
