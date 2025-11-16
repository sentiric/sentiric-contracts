// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_local_pb = require('../../../sentiric/llm/v1/local_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LLMLocalServiceGenerateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamRequest(buffer_arg) {
  return sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LLMLocalServiceGenerateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamResponse(buffer_arg) {
  return sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
//                      ANA SERVİS TANIMI
// =============================================================================
var LLMLocalServiceService = exports.LLMLocalServiceService = {
  // DÜZELTME: RPC, artık CI/CD standartlarına uygun olarak adlandırılmış
// yeni mesajları kullanıyor.
generateStream: {
    path: '/sentiric.llm.v1.LLMLocalService/GenerateStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamRequest,
    responseType: sentiric_llm_v1_local_pb.LLMLocalServiceGenerateStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_LLMLocalServiceGenerateStreamResponse,
  },
};

exports.LLMLocalServiceClient = grpc.makeGenericClientConstructor(LLMLocalServiceService, 'LLMLocalService');
