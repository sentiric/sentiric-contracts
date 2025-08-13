// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_tts_pb = require('../../../sentiric/tts/v1/tts_pb.js');

function serialize_sentiric_tts_v1_SynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_tts_pb.SynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_tts_pb.SynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_SynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_tts_pb.SynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_tts_pb.SynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Sentiric Text-to-Speech Gateway Service
var TextToSpeechServiceService = exports.TextToSpeechServiceService = {
  // Verilen metni sese dönüştürür.
synthesize: {
    path: '/sentiric.tts.v1.TextToSpeechService/Synthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_tts_pb.SynthesizeRequest,
    responseType: sentiric_tts_v1_tts_pb.SynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_SynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_SynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_SynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_SynthesizeResponse,
  },
};

exports.TextToSpeechServiceClient = grpc.makeGenericClientConstructor(TextToSpeechServiceService, 'TextToSpeechService');
