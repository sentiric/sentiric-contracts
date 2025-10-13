// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_legal_pb = require('../../../sentiric/vertical/v1/legal_pb.js');

function serialize_sentiric_vertical_v1_CheckCaseStatusRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_legal_pb.CheckCaseStatusRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.CheckCaseStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_CheckCaseStatusRequest(buffer_arg) {
  return sentiric_vertical_v1_legal_pb.CheckCaseStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_CheckCaseStatusResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_legal_pb.CheckCaseStatusResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.CheckCaseStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_CheckCaseStatusResponse(buffer_arg) {
  return sentiric_vertical_v1_legal_pb.CheckCaseStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LegalServiceService = exports.LegalServiceService = {
  checkCaseStatus: {
    path: '/sentiric.vertical.v1.LegalService/CheckCaseStatus',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_legal_pb.CheckCaseStatusRequest,
    responseType: sentiric_vertical_v1_legal_pb.CheckCaseStatusResponse,
    requestSerialize: serialize_sentiric_vertical_v1_CheckCaseStatusRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_CheckCaseStatusRequest,
    responseSerialize: serialize_sentiric_vertical_v1_CheckCaseStatusResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_CheckCaseStatusResponse,
  },
  // RPC Kuralı
};

exports.LegalServiceClient = grpc.makeGenericClientConstructor(LegalServiceService, 'LegalService');
