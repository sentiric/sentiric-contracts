// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_gateway_pb = require('../../../sentiric/tts/v1/gateway_pb.js');

function serialize_sentiric_tts_v1_ListVoicesRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.ListVoicesRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.ListVoicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_ListVoicesRequest(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.ListVoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_ListVoicesResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.ListVoicesResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.ListVoicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_ListVoicesResponse(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.ListVoicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_SynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.SynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.SynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_SynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.SynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.SynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_SynthesizeStreamRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.SynthesizeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeStreamRequest(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.SynthesizeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_SynthesizeStreamResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_gateway_pb.SynthesizeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.SynthesizeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_SynthesizeStreamResponse(buffer_arg) {
  return sentiric_tts_v1_gateway_pb.SynthesizeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
// TTS GATEWAY SERVICE (PUBLIC FACING)
// v1.16.0: Sample Rate ve Tuning Parametreleri Eklendi
// =============================================================================
//
var TtsGatewayServiceService = exports.TtsGatewayServiceService = {
  synthesize: {
    path: '/sentiric.tts.v1.TtsGatewayService/Synthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_gateway_pb.SynthesizeRequest,
    responseType: sentiric_tts_v1_gateway_pb.SynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_SynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_SynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_SynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_SynthesizeResponse,
  },
  synthesizeStream: {
    path: '/sentiric.tts.v1.TtsGatewayService/SynthesizeStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_tts_v1_gateway_pb.SynthesizeStreamRequest,
    responseType: sentiric_tts_v1_gateway_pb.SynthesizeStreamResponse,
    requestSerialize: serialize_sentiric_tts_v1_SynthesizeStreamRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_SynthesizeStreamRequest,
    responseSerialize: serialize_sentiric_tts_v1_SynthesizeStreamResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_SynthesizeStreamResponse,
  },
  listVoices: {
    path: '/sentiric.tts.v1.TtsGatewayService/ListVoices',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_gateway_pb.ListVoicesRequest,
    responseType: sentiric_tts_v1_gateway_pb.ListVoicesResponse,
    requestSerialize: serialize_sentiric_tts_v1_ListVoicesRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_ListVoicesRequest,
    responseSerialize: serialize_sentiric_tts_v1_ListVoicesResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_ListVoicesResponse,
  },
};

exports.TtsGatewayServiceClient = grpc.makeGenericClientConstructor(TtsGatewayServiceService, 'TtsGatewayService');
