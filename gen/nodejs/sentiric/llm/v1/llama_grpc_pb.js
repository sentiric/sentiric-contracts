// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_llama_pb = require('../../../sentiric/llm/v1/llama_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_sentiric_llm_v1_GenerateStreamRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_llama_pb.GenerateStreamRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateStreamRequest(buffer_arg) {
  return sentiric_llm_v1_llama_pb.GenerateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_GenerateStreamResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_llama_pb.GenerateStreamResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.GenerateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_GenerateStreamResponse(buffer_arg) {
  return sentiric_llm_v1_llama_pb.GenerateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LlamaServiceService = exports.LlamaServiceService = {
  // RPC Adı: GenerateStream
generateStream: {
    path: '/sentiric.llm.v1.LlamaService/GenerateStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_llm_v1_llama_pb.GenerateStreamRequest,
    responseType: sentiric_llm_v1_llama_pb.GenerateStreamResponse,
    requestSerialize: serialize_sentiric_llm_v1_GenerateStreamRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_GenerateStreamRequest,
    responseSerialize: serialize_sentiric_llm_v1_GenerateStreamResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_GenerateStreamResponse,
  },
};

exports.LlamaServiceClient = grpc.makeGenericClientConstructor(LlamaServiceService, 'LlamaService');
