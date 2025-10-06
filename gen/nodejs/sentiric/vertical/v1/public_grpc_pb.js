// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_public_pb = require('../../../sentiric/vertical/v1/public_pb.js');

function serialize_sentiric_vertical_v1_SubmitApplicationRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_public_pb.SubmitApplicationRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.SubmitApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_SubmitApplicationRequest(buffer_arg) {
  return sentiric_vertical_v1_public_pb.SubmitApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_SubmitApplicationResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_public_pb.SubmitApplicationResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.SubmitApplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_SubmitApplicationResponse(buffer_arg) {
  return sentiric_vertical_v1_public_pb.SubmitApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PublicServiceService = exports.PublicServiceService = {
  submitApplication: {
    path: '/sentiric.vertical.v1.PublicService/SubmitApplication',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_public_pb.SubmitApplicationRequest,
    responseType: sentiric_vertical_v1_public_pb.SubmitApplicationResponse,
    requestSerialize: serialize_sentiric_vertical_v1_SubmitApplicationRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_SubmitApplicationRequest,
    responseSerialize: serialize_sentiric_vertical_v1_SubmitApplicationResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_SubmitApplicationResponse,
  },
  // RPC Kuralı
};

exports.PublicServiceClient = grpc.makeGenericClientConstructor(PublicServiceService, 'PublicService');
