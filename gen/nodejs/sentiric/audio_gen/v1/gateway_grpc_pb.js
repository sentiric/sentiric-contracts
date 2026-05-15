// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_audio_gen_v1_gateway_pb = require('../../../sentiric/audio_gen/v1/gateway_pb.js');

function serialize_sentiric_audio_gen_v1_SubmitAudioJobRequest(arg) {
  if (!(arg instanceof sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobRequest)) {
    throw new Error('Expected argument of type sentiric.audio_gen.v1.SubmitAudioJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_audio_gen_v1_SubmitAudioJobRequest(buffer_arg) {
  return sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_audio_gen_v1_SubmitAudioJobResponse(arg) {
  if (!(arg instanceof sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobResponse)) {
    throw new Error('Expected argument of type sentiric.audio_gen.v1.SubmitAudioJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_audio_gen_v1_SubmitAudioJobResponse(buffer_arg) {
  return sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AudioGatewayServiceService = exports.AudioGatewayServiceService = {
  submitAudioJob: {
    path: '/sentiric.audio_gen.v1.AudioGatewayService/SubmitAudioJob',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobRequest,
    responseType: sentiric_audio_gen_v1_gateway_pb.SubmitAudioJobResponse,
    requestSerialize: serialize_sentiric_audio_gen_v1_SubmitAudioJobRequest,
    requestDeserialize: deserialize_sentiric_audio_gen_v1_SubmitAudioJobRequest,
    responseSerialize: serialize_sentiric_audio_gen_v1_SubmitAudioJobResponse,
    responseDeserialize: deserialize_sentiric_audio_gen_v1_SubmitAudioJobResponse,
  },
};

exports.AudioGatewayServiceClient = grpc.makeGenericClientConstructor(AudioGatewayServiceService, 'AudioGatewayService');
