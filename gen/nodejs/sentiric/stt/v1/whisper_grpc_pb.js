// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// File: proto/sentiric/stt/v1/whisper.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_stt_v1_whisper_pb = require('../../../sentiric/stt/v1/whisper_pb.js');

function serialize_sentiric_stt_v1_WhisperTranscribeRequest(arg) {
  if (!(arg instanceof sentiric_stt_v1_whisper_pb.WhisperTranscribeRequest)) {
    throw new Error('Expected argument of type sentiric.stt.v1.WhisperTranscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_WhisperTranscribeRequest(buffer_arg) {
  return sentiric_stt_v1_whisper_pb.WhisperTranscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_WhisperTranscribeResponse(arg) {
  if (!(arg instanceof sentiric_stt_v1_whisper_pb.WhisperTranscribeResponse)) {
    throw new Error('Expected argument of type sentiric.stt.v1.WhisperTranscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_WhisperTranscribeResponse(buffer_arg) {
  return sentiric_stt_v1_whisper_pb.WhisperTranscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_WhisperTranscribeStreamRequest(arg) {
  if (!(arg instanceof sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.stt.v1.WhisperTranscribeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_WhisperTranscribeStreamRequest(buffer_arg) {
  return sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_WhisperTranscribeStreamResponse(arg) {
  if (!(arg instanceof sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.stt.v1.WhisperTranscribeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_WhisperTranscribeStreamResponse(buffer_arg) {
  return sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// SttWhisperService, Whisper motoruna özgü düşük seviyeli kontrat.
var SttWhisperServiceService = exports.SttWhisperServiceService = {
  // Bir ses dosyasının tamamını tek seferde metne çevirir.
whisperTranscribe: {
    path: '/sentiric.stt.v1.SttWhisperService/WhisperTranscribe',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_stt_v1_whisper_pb.WhisperTranscribeRequest,
    responseType: sentiric_stt_v1_whisper_pb.WhisperTranscribeResponse,
    requestSerialize: serialize_sentiric_stt_v1_WhisperTranscribeRequest,
    requestDeserialize: deserialize_sentiric_stt_v1_WhisperTranscribeRequest,
    responseSerialize: serialize_sentiric_stt_v1_WhisperTranscribeResponse,
    responseDeserialize: deserialize_sentiric_stt_v1_WhisperTranscribeResponse,
  },
  // Gerçek zamanlı bir ses akışını metne çevirir.
whisperTranscribeStream: {
    path: '/sentiric.stt.v1.SttWhisperService/WhisperTranscribeStream',
    requestStream: true,
    responseStream: true,
    requestType: sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamRequest,
    responseType: sentiric_stt_v1_whisper_pb.WhisperTranscribeStreamResponse,
    requestSerialize: serialize_sentiric_stt_v1_WhisperTranscribeStreamRequest,
    requestDeserialize: deserialize_sentiric_stt_v1_WhisperTranscribeStreamRequest,
    responseSerialize: serialize_sentiric_stt_v1_WhisperTranscribeStreamResponse,
    responseDeserialize: deserialize_sentiric_stt_v1_WhisperTranscribeStreamResponse,
  },
};

exports.SttWhisperServiceClient = grpc.makeGenericClientConstructor(SttWhisperServiceService, 'SttWhisperService');
