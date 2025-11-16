// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_local_pb = require('../../../sentiric/llm/v1/local_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_sentiric_llm_v1_LocalGenerateStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LocalGenerateStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LocalGenerateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LocalGenerateStreamRequest(buffer_arg) {
  return sentiric_llm_v1_local_pb.LocalGenerateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_LocalGenerateStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LocalGenerateStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LocalGenerateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LocalGenerateStreamResponse(buffer_arg) {
  return sentiric_llm_v1_local_pb.LocalGenerateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
//                      ANA SERVİS TANIMI (Okuma Akışı Prensibi)
// Bu dosyanın "manşeti". Bir geliştirici ilk olarak buraya bakarak dosyanın
// ne işe yaradığını ve hangi RPC'leri sunduğunu anında görmelidir.
// =============================================================================
var LLMLocalServiceService = exports.LLMLocalServiceService = {
  // Verilen diyalog bağlamına göre token-token metin üretir.
generateStream: {
    path: '/sentiric.llm.v1.LLMLocalService/GenerateStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_local_pb.LocalGenerateStreamRequest,
    responseType: sentiric_llm_v1_local_pb.LocalGenerateStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_LocalGenerateStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_LocalGenerateStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_LocalGenerateStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_LocalGenerateStreamResponse,
  },
};

exports.LLMLocalServiceClient = grpc.makeGenericClientConstructor(LLMLocalServiceService, 'LLMLocalService');
