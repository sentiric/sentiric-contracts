// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_coqui_pb = require('../../../sentiric/tts/v1/coqui_pb.js');

function serialize_sentiric_tts_v1_CoquiSynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_coqui_pb.CoquiSynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.CoquiSynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_CoquiSynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_coqui_pb.CoquiSynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_CoquiSynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_coqui_pb.CoquiSynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.CoquiSynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_CoquiSynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_coqui_pb.CoquiSynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_CoquiSynthesizeStreamRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.CoquiSynthesizeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_CoquiSynthesizeStreamRequest(buffer_arg) {
  return sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_CoquiSynthesizeStreamResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.CoquiSynthesizeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_CoquiSynthesizeStreamResponse(buffer_arg) {
  return sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TtsCoquiServiceService = exports.TtsCoquiServiceService = {
  coquiSynthesize: {
    path: '/sentiric.tts.v1.TtsCoquiService/CoquiSynthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_coqui_pb.CoquiSynthesizeRequest,
    responseType: sentiric_tts_v1_coqui_pb.CoquiSynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_CoquiSynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_CoquiSynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_CoquiSynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_CoquiSynthesizeResponse,
  },
  coquiSynthesizeStream: {
    path: '/sentiric.tts.v1.TtsCoquiService/CoquiSynthesizeStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamRequest,
    responseType: sentiric_tts_v1_coqui_pb.CoquiSynthesizeStreamResponse,
    requestSerialize: serialize_sentiric_tts_v1_CoquiSynthesizeStreamRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_CoquiSynthesizeStreamRequest,
    responseSerialize: serialize_sentiric_tts_v1_CoquiSynthesizeStreamResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_CoquiSynthesizeStreamResponse,
  },
};

exports.TtsCoquiServiceClient = grpc.makeGenericClientConstructor(TtsCoquiServiceService, 'TtsCoquiService');
