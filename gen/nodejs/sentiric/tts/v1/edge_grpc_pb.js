// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_tts_v1_edge_pb = require('../../../sentiric/tts/v1/edge_pb.js');

function serialize_sentiric_tts_v1_EdgeSynthesizeRequest(arg) {
  if (!(arg instanceof sentiric_tts_v1_edge_pb.EdgeSynthesizeRequest)) {
    throw new Error('Expected argument of type sentiric.tts.v1.EdgeSynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_EdgeSynthesizeRequest(buffer_arg) {
  return sentiric_tts_v1_edge_pb.EdgeSynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_tts_v1_EdgeSynthesizeResponse(arg) {
  if (!(arg instanceof sentiric_tts_v1_edge_pb.EdgeSynthesizeResponse)) {
    throw new Error('Expected argument of type sentiric.tts.v1.EdgeSynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_tts_v1_EdgeSynthesizeResponse(buffer_arg) {
  return sentiric_tts_v1_edge_pb.EdgeSynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// TtsEdgeService, TTS motorlarından birine özgü düşük seviyeli kontrat.
var TtsEdgeServiceService = exports.TtsEdgeServiceService = {
  edgeSynthesize: {
    path: '/sentiric.tts.v1.TtsEdgeService/EdgeSynthesize',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_tts_v1_edge_pb.EdgeSynthesizeRequest,
    responseType: sentiric_tts_v1_edge_pb.EdgeSynthesizeResponse,
    requestSerialize: serialize_sentiric_tts_v1_EdgeSynthesizeRequest,
    requestDeserialize: deserialize_sentiric_tts_v1_EdgeSynthesizeRequest,
    responseSerialize: serialize_sentiric_tts_v1_EdgeSynthesizeResponse,
    responseDeserialize: deserialize_sentiric_tts_v1_EdgeSynthesizeResponse,
  },
  // RPC Adı da değişti
};

exports.TtsEdgeServiceClient = grpc.makeGenericClientConstructor(TtsEdgeServiceService, 'TtsEdgeService');
