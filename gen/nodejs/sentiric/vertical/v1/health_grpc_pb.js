// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_health_pb = require('../../../sentiric/vertical/v1/health_pb.js');

function serialize_sentiric_vertical_v1_FindDoctorRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_health_pb.FindDoctorRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.FindDoctorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_FindDoctorRequest(buffer_arg) {
  return sentiric_vertical_v1_health_pb.FindDoctorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_FindDoctorResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_health_pb.FindDoctorResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.FindDoctorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_FindDoctorResponse(buffer_arg) {
  return sentiric_vertical_v1_health_pb.FindDoctorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_ScheduleAppointmentRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_health_pb.ScheduleAppointmentRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.ScheduleAppointmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_ScheduleAppointmentRequest(buffer_arg) {
  return sentiric_vertical_v1_health_pb.ScheduleAppointmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_ScheduleAppointmentResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_health_pb.ScheduleAppointmentResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.ScheduleAppointmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_ScheduleAppointmentResponse(buffer_arg) {
  return sentiric_vertical_v1_health_pb.ScheduleAppointmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthServiceService = exports.HealthServiceService = {
  findDoctor: {
    path: '/sentiric.vertical.v1.HealthService/FindDoctor',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_health_pb.FindDoctorRequest,
    responseType: sentiric_vertical_v1_health_pb.FindDoctorResponse,
    requestSerialize: serialize_sentiric_vertical_v1_FindDoctorRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_FindDoctorRequest,
    responseSerialize: serialize_sentiric_vertical_v1_FindDoctorResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_FindDoctorResponse,
  },
  // RPC Kuralı
scheduleAppointment: {
    path: '/sentiric.vertical.v1.HealthService/ScheduleAppointment',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_health_pb.ScheduleAppointmentRequest,
    responseType: sentiric_vertical_v1_health_pb.ScheduleAppointmentResponse,
    requestSerialize: serialize_sentiric_vertical_v1_ScheduleAppointmentRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_ScheduleAppointmentRequest,
    responseSerialize: serialize_sentiric_vertical_v1_ScheduleAppointmentResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_ScheduleAppointmentResponse,
  },
  // RPC Kuralı
};

exports.HealthServiceClient = grpc.makeGenericClientConstructor(HealthServiceService, 'HealthService');
