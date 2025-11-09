// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_local_pb = require('../../../sentiric/llm/v1/local_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_sentiric_llm_v1_LocalGenerateRequest(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LocalGenerateRequest)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LocalGenerateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LocalGenerateRequest(buffer_arg) {
  return sentiric_llm_v1_local_pb.LocalGenerateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_llm_v1_LocalGenerateResponse(arg) {
  if (!(arg instanceof sentiric_llm_v1_local_pb.LocalGenerateResponse)) {
    throw new Error('Expected argument of type sentiric.llm.v1.LocalGenerateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_llm_v1_LocalGenerateResponse(buffer_arg) {
  return sentiric_llm_v1_local_pb.LocalGenerateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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


var LLMLocalServiceService = exports.LLMLocalServiceService = {
  localGenerate: {
    path: '/sentiric.llm.v1.LLMLocalService/LocalGenerate',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_llm_v1_local_pb.LocalGenerateRequest,
    responseType: sentiric_llm_v1_local_pb.LocalGenerateResponse,
    requestSerialize: serialize_sentiric_llm_v1_LocalGenerateRequest,
    requestDeserialize: deserialize_sentiric_llm_v1_LocalGenerateRequest,
    responseSerialize: serialize_sentiric_llm_v1_LocalGenerateResponse,
    responseDeserialize: deserialize_sentiric_llm_v1_LocalGenerateResponse,
  },
  // DEĞİŞİKLİK: Artık kendi özel istek mesajını kullanıyor.
localGenerateStream: {
    path: '/sentiric.llm.v1.LLMLocalService/LocalGenerateStream',
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
