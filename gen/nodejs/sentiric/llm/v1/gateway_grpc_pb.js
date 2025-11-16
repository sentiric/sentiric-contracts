// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_gateway_pb = require('../../../sentiric/llm/v1/gateway_pb.js');
var sentiric_llm_v1_local_pb = require('../../../sentiric/llm/v1/local_pb.js');

function serialize_sentiric_llm_v1_GenerateDialogStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateDialogStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateDialogStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateDialogStreamRequest(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateDialogStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_GenerateDialogStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_gateway_pb.GenerateDialogStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateDialogStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateDialogStreamResponse(buffer_arg) {
  return sentiric_llm_v1_gateway_pb.GenerateDialogStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
//                      ANA SERVİS TANIMI
// =============================================================================
var LlmGatewayServiceService = exports.LlmGatewayServiceService = {
  // DÜZELTME: RPC, artık yeni kapsayıcı mesajları kullanıyor.
generateDialogStream: {
    path: '/sentiric.llm.v1.LlmGatewayService/GenerateDialogStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_gateway_pb.GenerateDialogStreamRequest,
    responseType: sentiric_llm_v1_gateway_pb.GenerateDialogStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_GenerateDialogStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_GenerateDialogStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_GenerateDialogStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_GenerateDialogStreamResponse,
  },
};

exports.LlmGatewayServiceClient = grpc.makeGenericClientConstructor(LlmGatewayServiceService, 'LlmGatewayService');
