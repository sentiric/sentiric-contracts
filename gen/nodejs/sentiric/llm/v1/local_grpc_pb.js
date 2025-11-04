// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_llm_v1_local_pb = require('../../../sentiric/llm/v1/local_pb.js');

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


// LLMLocalService, yerel bir LLM motoruna özgü düşük seviyeli kontrattır.
// Bu servis, bir uzman motor olduğu için kendi spesifik istek ve yanıt mesajlarını kullanır.
var LLMLocalServiceService = exports.LLMLocalServiceService = {
  // Bir metin isteminden (prompt) yola çıkarak token akışı (stream) üretir.
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
