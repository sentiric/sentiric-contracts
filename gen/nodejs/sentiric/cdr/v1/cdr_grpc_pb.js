// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_cdr_v1_cdr_pb = require('../../../sentiric/cdr/v1/cdr_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_sentiric_cdr_v1_RecordCallEventRequest(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.RecordCallEventRequest)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.RecordCallEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_RecordCallEventRequest(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.RecordCallEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_cdr_v1_RecordCallEventResponse(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.RecordCallEventResponse)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.RecordCallEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_RecordCallEventResponse(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.RecordCallEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CdrServiceService = exports.CdrServiceService = {
  recordCallEvent: {
    path: '/sentiric.cdr.v1.CdrService/RecordCallEvent',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_cdr_v1_cdr_pb.RecordCallEventRequest,
    responseType: sentiric_cdr_v1_cdr_pb.RecordCallEventResponse,
    requestSerialize: serialize_sentiric_cdr_v1_RecordCallEventRequest,
    requestDeserialize: deserialize_sentiric_cdr_v1_RecordCallEventRequest,
    responseSerialize: serialize_sentiric_cdr_v1_RecordCallEventResponse,
    responseDeserialize: deserialize_sentiric_cdr_v1_RecordCallEventResponse,
  },
};

exports.CdrServiceClient = grpc.makeGenericClientConstructor(CdrServiceService, 'CdrService');
