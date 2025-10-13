// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_sbc_pb = require('../../../sentiric/sip/v1/sbc_pb.js');

function serialize_sentiric_sip_v1_GetRouteRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_sbc_pb.GetRouteRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetRouteRequest(buffer_arg) {
  return sentiric_sip_v1_sbc_pb.GetRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_GetRouteResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_sbc_pb.GetRouteResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetRouteResponse(buffer_arg) {
  return sentiric_sip_v1_sbc_pb.GetRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SbcServiceService = exports.SbcServiceService = {
  getRoute: {
    path: '/sentiric.sip.v1.SbcService/GetRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_sbc_pb.GetRouteRequest,
    responseType: sentiric_sip_v1_sbc_pb.GetRouteResponse,
    requestSerialize: serialize_sentiric_sip_v1_GetRouteRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_GetRouteRequest,
    responseSerialize: serialize_sentiric_sip_v1_GetRouteResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_GetRouteResponse,
  },
};

exports.SbcServiceClient = grpc.makeGenericClientConstructor(SbcServiceService, 'SbcService');
