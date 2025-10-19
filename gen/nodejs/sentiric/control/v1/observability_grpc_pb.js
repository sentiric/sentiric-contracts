// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_control_v1_observability_pb = require('../../../sentiric/control/v1/observability_pb.js');

function serialize_sentiric_control_v1_GetLogsRequest(arg) {
  if (!(arg instanceof sentiric_control_v1_observability_pb.GetLogsRequest)) {
    throw new Error('Expected argument of type sentiric.control.v1.GetLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_GetLogsRequest(buffer_arg) {
  return sentiric_control_v1_observability_pb.GetLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_control_v1_GetLogsResponse(arg) {
  if (!(arg instanceof sentiric_control_v1_observability_pb.GetLogsResponse)) {
    throw new Error('Expected argument of type sentiric.control.v1.GetLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_GetLogsResponse(buffer_arg) {
  return sentiric_control_v1_observability_pb.GetLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_control_v1_GetMetricsRequest(arg) {
  if (!(arg instanceof sentiric_control_v1_observability_pb.GetMetricsRequest)) {
    throw new Error('Expected argument of type sentiric.control.v1.GetMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_GetMetricsRequest(buffer_arg) {
  return sentiric_control_v1_observability_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_control_v1_GetMetricsResponse(arg) {
  if (!(arg instanceof sentiric_control_v1_observability_pb.GetMetricsResponse)) {
    throw new Error('Expected argument of type sentiric.control.v1.GetMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_GetMetricsResponse(buffer_arg) {
  return sentiric_control_v1_observability_pb.GetMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ObservabilityServiceService = exports.ObservabilityServiceService = {
  getMetrics: {
    path: '/sentiric.control.v1.ObservabilityService/GetMetrics',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_control_v1_observability_pb.GetMetricsRequest,
    responseType: sentiric_control_v1_observability_pb.GetMetricsResponse,
    requestSerialize: serialize_sentiric_control_v1_GetMetricsRequest,
    requestDeserialize: deserialize_sentiric_control_v1_GetMetricsRequest,
    responseSerialize: serialize_sentiric_control_v1_GetMetricsResponse,
    responseDeserialize: deserialize_sentiric_control_v1_GetMetricsResponse,
  },
  getLogs: {
    path: '/sentiric.control.v1.ObservabilityService/GetLogs',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_control_v1_observability_pb.GetLogsRequest,
    responseType: sentiric_control_v1_observability_pb.GetLogsResponse,
    requestSerialize: serialize_sentiric_control_v1_GetLogsRequest,
    requestDeserialize: deserialize_sentiric_control_v1_GetLogsRequest,
    responseSerialize: serialize_sentiric_control_v1_GetLogsResponse,
    responseDeserialize: deserialize_sentiric_control_v1_GetLogsResponse,
  },
};

exports.ObservabilityServiceClient = grpc.makeGenericClientConstructor(ObservabilityServiceService, 'ObservabilityService');
