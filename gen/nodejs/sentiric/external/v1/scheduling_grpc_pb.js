// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_external_v1_scheduling_pb = require('../../../sentiric/external/v1/scheduling_pb.js');

function serialize_sentiric_external_v1_CreateAppointmentRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_scheduling_pb.CreateAppointmentRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.CreateAppointmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_CreateAppointmentRequest(buffer_arg) {
  return sentiric_external_v1_scheduling_pb.CreateAppointmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_CreateAppointmentResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_scheduling_pb.CreateAppointmentResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.CreateAppointmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_CreateAppointmentResponse(buffer_arg) {
  return sentiric_external_v1_scheduling_pb.CreateAppointmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SchedulingServiceService = exports.SchedulingServiceService = {
  createAppointment: {
    path: '/sentiric.external.v1.SchedulingService/CreateAppointment',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_scheduling_pb.CreateAppointmentRequest,
    responseType: sentiric_external_v1_scheduling_pb.CreateAppointmentResponse,
    requestSerialize: serialize_sentiric_external_v1_CreateAppointmentRequest,
    requestDeserialize: deserialize_sentiric_external_v1_CreateAppointmentRequest,
    responseSerialize: serialize_sentiric_external_v1_CreateAppointmentResponse,
    responseDeserialize: deserialize_sentiric_external_v1_CreateAppointmentResponse,
  },
};

exports.SchedulingServiceClient = grpc.makeGenericClientConstructor(SchedulingServiceService, 'SchedulingService');
