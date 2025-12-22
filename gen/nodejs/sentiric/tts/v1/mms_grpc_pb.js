// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_mms_pb = require('../../../sentiric/tts/v1/mms_pb.js');

function serialize_sentiric_tts_v1_MmsSynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_mms_pb.MmsSynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.MmsSynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_MmsSynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_mms_pb.MmsSynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_MmsSynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_mms_pb.MmsSynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.MmsSynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_MmsSynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_mms_pb.MmsSynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_MmsSynthesizeStreamRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_mms_pb.MmsSynthesizeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.MmsSynthesizeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_MmsSynthesizeStreamRequest(buffer_arg) {
  return sentiric_tts_v1_mms_pb.MmsSynthesizeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_MmsSynthesizeStreamResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_mms_pb.MmsSynthesizeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.MmsSynthesizeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_MmsSynthesizeStreamResponse(buffer_arg) {
  return sentiric_tts_v1_mms_pb.MmsSynthesizeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// TtsMmsService, Facebook MMS (Massively Multilingual Speech) modeli için
// özelleştirilmiş, düşük seviyeli sentezleme arayüzüdür.
var TtsMmsServiceService = exports.TtsMmsServiceService = {
  // Metni tek seferde sese çevirir (Unary).
mmsSynthesize: {
    path: '/sentiric.tts.v1.TtsMmsService/MmsSynthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_mms_pb.MmsSynthesizeRequest,
    responseType: sentiric_tts_v1_mms_pb.MmsSynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_MmsSynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_MmsSynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_MmsSynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_MmsSynthesizeResponse,
  },
  // Metni cümle bazlı parçalayarak akış halinde sese çevirir (Server Streaming).
// Not: MMS native streaming desteklemez, bu metot motor tarafında pseudo-streaming uygular.
mmsSynthesizeStream: {
    path: '/sentiric.tts.v1.TtsMmsService/MmsSynthesizeStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_tts_v1_mms_pb.MmsSynthesizeStreamRequest,
    responseType: sentiric_tts_v1_mms_pb.MmsSynthesizeStreamResponse,
    requestSerialize: serialize_sentiric_tts_v1_MmsSynthesizeStreamRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_MmsSynthesizeStreamRequest,
    responseSerialize: serialize_sentiric_tts_v1_MmsSynthesizeStreamResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_MmsSynthesizeStreamResponse,
  },
};

exports.TtsMmsServiceClient = grpc.makeGenericClientConstructor(TtsMmsServiceService, 'TtsMmsService');
