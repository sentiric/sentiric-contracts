// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_cdr_v1_cdr_pb = require('../../../sentiric/cdr/v1/cdr_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_sentiric_cdr_v1_CreateCallRecordRequest(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.CreateCallRecordRequest)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.CreateCallRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_CreateCallRecordRequest(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.CreateCallRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_cdr_v1_CreateCallRecordResponse(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.CreateCallRecordResponse)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.CreateCallRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_CreateCallRecordResponse(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.CreateCallRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_sentiric_cdr_v1_UpdateCallRecordRequest(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.UpdateCallRecordRequest)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.UpdateCallRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_UpdateCallRecordRequest(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.UpdateCallRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_cdr_v1_UpdateCallRecordResponse(arg) {
  if (!(arg instanceof sentiric_cdr_v1_cdr_pb.UpdateCallRecordResponse)) {
    throw new Error('Expected argument of type sentiric.cdr.v1.UpdateCallRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_cdr_v1_UpdateCallRecordResponse(buffer_arg) {
  return sentiric_cdr_v1_cdr_pb.UpdateCallRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // [YENİ] Çağrı Başlangıcını Kaydet (Create)
createCallRecord: {
    path: '/sentiric.cdr.v1.CdrService/CreateCallRecord',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_cdr_v1_cdr_pb.CreateCallRecordRequest,
    responseType: sentiric_cdr_v1_cdr_pb.CreateCallRecordResponse,
    requestSerialize: serialize_sentiric_cdr_v1_CreateCallRecordRequest,
    requestDeserialize: deserialize_sentiric_cdr_v1_CreateCallRecordRequest,
    responseSerialize: serialize_sentiric_cdr_v1_CreateCallRecordResponse,
    responseDeserialize: deserialize_sentiric_cdr_v1_CreateCallRecordResponse,
  },
  // [YENİ] Çağrı Bitişini Güncelle (Update)
updateCallRecord: {
    path: '/sentiric.cdr.v1.CdrService/UpdateCallRecord',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_cdr_v1_cdr_pb.UpdateCallRecordRequest,
    responseType: sentiric_cdr_v1_cdr_pb.UpdateCallRecordResponse,
    requestSerialize: serialize_sentiric_cdr_v1_UpdateCallRecordRequest,
    requestDeserialize: deserialize_sentiric_cdr_v1_UpdateCallRecordRequest,
    responseSerialize: serialize_sentiric_cdr_v1_UpdateCallRecordResponse,
    responseDeserialize: deserialize_sentiric_cdr_v1_UpdateCallRecordResponse,
  },
};

exports.CdrServiceClient = grpc.makeGenericClientConstructor(CdrServiceService, 'CdrService');
