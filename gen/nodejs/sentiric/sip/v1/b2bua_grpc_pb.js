// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_b2bua_pb = require('../../../sentiric/sip/v1/b2bua_pb.js');

function serialize_sentiric_sip_v1_InitiateCallRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_b2bua_pb.InitiateCallRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.InitiateCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_InitiateCallRequest(buffer_arg) {
  return sentiric_sip_v1_b2bua_pb.InitiateCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_InitiateCallResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_b2bua_pb.InitiateCallResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.InitiateCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_InitiateCallResponse(buffer_arg) {
  return sentiric_sip_v1_b2bua_pb.InitiateCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_TransferCallRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_b2bua_pb.TransferCallRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.TransferCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_TransferCallRequest(buffer_arg) {
  return sentiric_sip_v1_b2bua_pb.TransferCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_TransferCallResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_b2bua_pb.TransferCallResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.TransferCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_TransferCallResponse(buffer_arg) {
  return sentiric_sip_v1_b2bua_pb.TransferCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// B2BUAService, AI odaklı çağrı başlatma ve transfer mantığını yönetir.
var B2BUAServiceService = exports.B2BUAServiceService = {
  initiateCall: {
    path: '/sentiric.sip.v1.B2BUAService/InitiateCall',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_b2bua_pb.InitiateCallRequest,
    responseType: sentiric_sip_v1_b2bua_pb.InitiateCallResponse,
    requestSerialize: serialize_sentiric_sip_v1_InitiateCallRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_InitiateCallRequest,
    responseSerialize: serialize_sentiric_sip_v1_InitiateCallResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_InitiateCallResponse,
  },
  transferCall: {
    path: '/sentiric.sip.v1.B2BUAService/TransferCall',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_b2bua_pb.TransferCallRequest,
    responseType: sentiric_sip_v1_b2bua_pb.TransferCallResponse,
    requestSerialize: serialize_sentiric_sip_v1_TransferCallRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_TransferCallRequest,
    responseSerialize: serialize_sentiric_sip_v1_TransferCallResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_TransferCallResponse,
  },
};

exports.B2BUAServiceClient = grpc.makeGenericClientConstructor(B2BUAServiceService, 'B2BUAService');
