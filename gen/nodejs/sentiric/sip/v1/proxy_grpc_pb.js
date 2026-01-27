// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_proxy_pb = require('../../../sentiric/sip/v1/proxy_pb.js');

function serialize_sentiric_sip_v1_GetNextHopRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_proxy_pb.GetNextHopRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetNextHopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetNextHopRequest(buffer_arg) {
  return sentiric_sip_v1_proxy_pb.GetNextHopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_GetNextHopResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_proxy_pb.GetNextHopResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.GetNextHopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_GetNextHopResponse(buffer_arg) {
  return sentiric_sip_v1_proxy_pb.GetNextHopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProxyServiceService = exports.ProxyServiceService = {
  // SBC, bir SIP paketini nereye yönlendireceğini sormak için bunu çağırır.
getNextHop: {
    path: '/sentiric.sip.v1.ProxyService/GetNextHop',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_proxy_pb.GetNextHopRequest,
    responseType: sentiric_sip_v1_proxy_pb.GetNextHopResponse,
    requestSerialize: serialize_sentiric_sip_v1_GetNextHopRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_GetNextHopRequest,
    responseSerialize: serialize_sentiric_sip_v1_GetNextHopResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_GetNextHopResponse,
  },
};

exports.ProxyServiceClient = grpc.makeGenericClientConstructor(ProxyServiceService, 'ProxyService');
