// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_gateway_pb = require('../../../sentiric/llm/v1/gateway_pb.js');

function serialize_sentiric_llm_v1_GenerateRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateRequest(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_GenerateResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateResponse(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_GenerateStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateStreamRequest(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_GenerateStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateStreamResponse(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LlmGatewayServiceService = exports.LlmGatewayServiceService = {
  generate: {
    path: '/sentiric.llm.v1.LlmGatewayService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_llm_v1_gateway_pb.GenerateRequest,
    responseType: sentiric_llm_v1_gateway_pb.GenerateResponse,
    requestSerialize: serialize_sentiric_llm_v1_GenerateRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_GenerateRequest,
    responseSerialize: serialize_sentiric_llm_v1_GenerateResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_GenerateResponse,
  },
  generateStream: {
    path: '/sentiric.llm.v1.LlmGatewayService/GenerateStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_gateway_pb.GenerateStreamRequest,
    responseType: sentiric_llm_v1_gateway_pb.GenerateStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_GenerateStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_GenerateStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_GenerateStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_GenerateStreamResponse,
  },
  // Yeniden Adlandırıldı
};

exports.LlmGatewayServiceClient = grpc.makeGenericClientConstructor(LlmGatewayServiceService, 'LlmGatewayService');
