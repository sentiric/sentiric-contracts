// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_llama_pb = require('../../../sentiric/llm/v1/llama_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_sentiric_llm_v1_LlamaGenerateStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_llama_pb.LlamaGenerateStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LlamaGenerateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LlamaGenerateStreamRequest(buffer_arg) {
  return sentiric_llm_v1_llama_pb.LlamaGenerateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_LlamaGenerateStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_llama_pb.LlamaGenerateStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LlamaGenerateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LlamaGenerateStreamResponse(buffer_arg) {
  return sentiric_llm_v1_llama_pb.LlamaGenerateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
// LLAMA ENGINE SERVICE (INTERNAL)
// =============================================================================
// Bu servis, Gateway veya doğrudan Client tarafından Llama.cpp motoruna 
// erişmek için kullanılır.
//
var LlamaServiceService = exports.LlamaServiceService = {
  // Token akışı sağlayan ana üretim metodu
generateStream: {
    path: '/sentiric.llm.v1.LlamaService/GenerateStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_llama_pb.LlamaGenerateStreamRequest,
    responseType: sentiric_llm_v1_llama_pb.LlamaGenerateStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_LlamaGenerateStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_LlamaGenerateStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_LlamaGenerateStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_LlamaGenerateStreamResponse,
  },
};

exports.LlamaServiceClient = grpc.makeGenericClientConstructor(LlamaServiceService, 'LlamaService');
// ESKİ: LLMLocalService
