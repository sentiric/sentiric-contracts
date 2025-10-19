// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_control_v1_license_pb = require('../../../sentiric/control/v1/license_pb.js');

function serialize_sentiric_control_v1_VerifyFeatureRequest(arg) {
  if (!(arg instanceof sentiric_control_v1_license_pb.VerifyFeatureRequest)) {
    throw new Error('Expected argument of type sentiric.control.v1.VerifyFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_VerifyFeatureRequest(buffer_arg) {
  return sentiric_control_v1_license_pb.VerifyFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_control_v1_VerifyFeatureResponse(arg) {
  if (!(arg instanceof sentiric_control_v1_license_pb.VerifyFeatureResponse)) {
    throw new Error('Expected argument of type sentiric.control.v1.VerifyFeatureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_VerifyFeatureResponse(buffer_arg) {
  return sentiric_control_v1_license_pb.VerifyFeatureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LicenseServiceService = exports.LicenseServiceService = {
  verifyFeature: {
    path: '/sentiric.control.v1.LicenseService/VerifyFeature',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_control_v1_license_pb.VerifyFeatureRequest,
    responseType: sentiric_control_v1_license_pb.VerifyFeatureResponse,
    requestSerialize: serialize_sentiric_control_v1_VerifyFeatureRequest,
    requestDeserialize: deserialize_sentiric_control_v1_VerifyFeatureRequest,
    responseSerialize: serialize_sentiric_control_v1_VerifyFeatureResponse,
    responseDeserialize: deserialize_sentiric_control_v1_VerifyFeatureResponse,
  },
};

exports.LicenseServiceClient = grpc.makeGenericClientConstructor(LicenseServiceService, 'LicenseService');
