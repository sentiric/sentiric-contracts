// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ========== FILE: sentiric-contracts/proto/sentiric/dialplan/v1/dialplan.proto (Nihai ve Düzeltilmiş Hali) ==========
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_dialplan_v1_dialplan_pb = require('../../../sentiric/dialplan/v1/dialplan_pb.js');
var sentiric_user_v1_user_pb = require('../../../sentiric/user/v1/user_pb.js');

function serialize_sentiric_dialplan_v1_ResolveDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ResolveDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ResolveDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ResolveDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ResolveDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ResolveDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DialplanServiceService = exports.DialplanServiceService = {
  resolveDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/ResolveDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_ResolveDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_ResolveDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_ResolveDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_ResolveDialplanResponse,
  },
};

exports.DialplanServiceClient = grpc.makeGenericClientConstructor(DialplanServiceService, 'DialplanService');
