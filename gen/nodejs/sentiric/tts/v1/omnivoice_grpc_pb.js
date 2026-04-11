// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Dosya: proto/sentiric/tts/v1/omnivoice.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_omnivoice_pb = require('../../../sentiric/tts/v1/omnivoice_pb.js');

function serialize_sentiric_tts_v1_OmnivoiceSynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.OmnivoiceSynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_OmnivoiceSynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_OmnivoiceSynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.OmnivoiceSynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_OmnivoiceSynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.OmnivoiceSynthesizeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamRequest(buffer_arg) {
  return sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.OmnivoiceSynthesizeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamResponse(buffer_arg) {
  return sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TtsOmnivoiceServiceService = exports.TtsOmnivoiceServiceService = {
  omnivoiceSynthesize: {
    path: '/sentiric.tts.v1.TtsOmnivoiceService/OmnivoiceSynthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeRequest,
    responseType: sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_OmnivoiceSynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_OmnivoiceSynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_OmnivoiceSynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_OmnivoiceSynthesizeResponse,
  },
  omnivoiceSynthesizeStream: {
    path: '/sentiric.tts.v1.TtsOmnivoiceService/OmnivoiceSynthesizeStream',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamRequest,
    responseType: sentiric_tts_v1_omnivoice_pb.OmnivoiceSynthesizeStreamResponse,
    requestSerialize: serialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamRequest,
    responseSerialize: serialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_OmnivoiceSynthesizeStreamResponse,
  },
};

exports.TtsOmnivoiceServiceClient = grpc.makeGenericClientConstructor(TtsOmnivoiceServiceService, 'TtsOmnivoiceService');
