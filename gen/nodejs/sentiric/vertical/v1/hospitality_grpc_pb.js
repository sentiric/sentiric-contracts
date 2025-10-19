// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_hospitality_pb = require('../../../sentiric/vertical/v1/hospitality_pb.js');

function serialize_sentiric_vertical_v1_BookRoomRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_hospitality_pb.BookRoomRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.BookRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_BookRoomRequest(buffer_arg) {
  return sentiric_vertical_v1_hospitality_pb.BookRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_BookRoomResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_hospitality_pb.BookRoomResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.BookRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_BookRoomResponse(buffer_arg) {
  return sentiric_vertical_v1_hospitality_pb.BookRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_FindHotelsRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_hospitality_pb.FindHotelsRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.FindHotelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_FindHotelsRequest(buffer_arg) {
  return sentiric_vertical_v1_hospitality_pb.FindHotelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_FindHotelsResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_hospitality_pb.FindHotelsResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.FindHotelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_FindHotelsResponse(buffer_arg) {
  return sentiric_vertical_v1_hospitality_pb.FindHotelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HospitalityServiceService = exports.HospitalityServiceService = {
  findHotels: {
    path: '/sentiric.vertical.v1.HospitalityService/FindHotels',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_hospitality_pb.FindHotelsRequest,
    responseType: sentiric_vertical_v1_hospitality_pb.FindHotelsResponse,
    requestSerialize: serialize_sentiric_vertical_v1_FindHotelsRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_FindHotelsRequest,
    responseSerialize: serialize_sentiric_vertical_v1_FindHotelsResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_FindHotelsResponse,
  },
  // RPC Kuralı
bookRoom: {
    path: '/sentiric.vertical.v1.HospitalityService/BookRoom',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_hospitality_pb.BookRoomRequest,
    responseType: sentiric_vertical_v1_hospitality_pb.BookRoomResponse,
    requestSerialize: serialize_sentiric_vertical_v1_BookRoomRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_BookRoomRequest,
    responseSerialize: serialize_sentiric_vertical_v1_BookRoomResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_BookRoomResponse,
  },
  // RPC Kuralı
};

exports.HospitalityServiceClient = grpc.makeGenericClientConstructor(HospitalityServiceService, 'HospitalityService');
