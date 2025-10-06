// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_gateway_pb = require('../../../sentiric/sip/v1/gateway_pb.js');

function serialize_sentiric_sip_v1_GetLoadRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_gateway_pb.GetLoadRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetLoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetLoadRequest(buffer_arg) {
  return sentiric_sip_v1_gateway_pb.GetLoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_GetLoadResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_gateway_pb.GetLoadResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetLoadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetLoadResponse(buffer_arg) {
  return sentiric_sip_v1_gateway_pb.GetLoadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SipGatewayServiceService = exports.SipGatewayServiceService = {
  getLoad: {
    path: '/sentiric.sip.v1.SipGatewayService/GetLoad',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_gateway_pb.GetLoadRequest,
    responseType: sentiric_sip_v1_gateway_pb.GetLoadResponse,
    requestSerialize: serialize_sentiric_sip_v1_GetLoadRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_GetLoadRequest,
    responseSerialize: serialize_sentiric_sip_v1_GetLoadResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_GetLoadResponse,
  },
};

exports.SipGatewayServiceClient = grpc.makeGenericClientConstructor(SipGatewayServiceService, 'SipGatewayService');
