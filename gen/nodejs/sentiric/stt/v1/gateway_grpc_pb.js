// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_stt_v1_gateway_pb = require('../../../sentiric/stt/v1/gateway_pb.js');

function serialize_sentiric_stt_v1_TranscribeRequest(arg) {
  if (!(arg instanceof sentiric_stt_v1_gateway_pb.TranscribeRequest)) {
    throw new Error('Expected argument of type sentiric.stt.v1.TranscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_TranscribeRequest(buffer_arg) {
  return sentiric_stt_v1_gateway_pb.TranscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_TranscribeResponse(arg) {
  if (!(arg instanceof sentiric_stt_v1_gateway_pb.TranscribeResponse)) {
    throw new Error('Expected argument of type sentiric.stt.v1.TranscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_TranscribeResponse(buffer_arg) {
  return sentiric_stt_v1_gateway_pb.TranscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_TranscribeStreamRequest(arg) {
  if (!(arg instanceof sentiric_stt_v1_gateway_pb.TranscribeStreamRequest)) {
    throw new Error('Expected argument of type sentiric.stt.v1.TranscribeStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_TranscribeStreamRequest(buffer_arg) {
  return sentiric_stt_v1_gateway_pb.TranscribeStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_stt_v1_TranscribeStreamResponse(arg) {
  if (!(arg instanceof sentiric_stt_v1_gateway_pb.TranscribeStreamResponse)) {
    throw new Error('Expected argument of type sentiric.stt.v1.TranscribeStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_stt_v1_TranscribeStreamResponse(buffer_arg) {
  return sentiric_stt_v1_gateway_pb.TranscribeStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SttGatewayServiceService = exports.SttGatewayServiceService = {
  transcribe: {
    path: '/sentiric.stt.v1.SttGatewayService/Transcribe',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_stt_v1_gateway_pb.TranscribeRequest,
    responseType: sentiric_stt_v1_gateway_pb.TranscribeResponse,
    requestSerialize: serialize_sentiric_stt_v1_TranscribeRequest,
    requestDeserialize: deserialize_sentiric_stt_v1_TranscribeRequest,
    responseSerialize: serialize_sentiric_stt_v1_TranscribeResponse,
    responseDeserialize: deserialize_sentiric_stt_v1_TranscribeResponse,
  },
  transcribeStream: {
    path: '/sentiric.stt.v1.SttGatewayService/TranscribeStream',
    requestStream: true,
    responseStream: true,
    requestType: sentiric_stt_v1_gateway_pb.TranscribeStreamRequest,
    responseType: sentiric_stt_v1_gateway_pb.TranscribeStreamResponse,
    requestSerialize: serialize_sentiric_stt_v1_TranscribeStreamRequest,
    requestDeserialize: deserialize_sentiric_stt_v1_TranscribeStreamRequest,
    responseSerialize: serialize_sentiric_stt_v1_TranscribeStreamResponse,
    responseDeserialize: deserialize_sentiric_stt_v1_TranscribeStreamResponse,
  },
};

exports.SttGatewayServiceClient = grpc.makeGenericClientConstructor(SttGatewayServiceService, 'SttGatewayService');
