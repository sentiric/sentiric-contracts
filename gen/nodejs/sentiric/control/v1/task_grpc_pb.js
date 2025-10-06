// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_control_v1_task_pb = require('../../../sentiric/control/v1/task_pb.js');

function serialize_sentiric_control_v1_DispatchTaskRequest(arg) {
  if (!(arg instanceof sentiric_control_v1_task_pb.DispatchTaskRequest)) {
    throw new Error('Expected argument of type sentiric.control.v1.DispatchTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_DispatchTaskRequest(buffer_arg) {
  return sentiric_control_v1_task_pb.DispatchTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_control_v1_DispatchTaskResponse(arg) {
  if (!(arg instanceof sentiric_control_v1_task_pb.DispatchTaskResponse)) {
    throw new Error('Expected argument of type sentiric.control.v1.DispatchTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_control_v1_DispatchTaskResponse(buffer_arg) {
  return sentiric_control_v1_task_pb.DispatchTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  dispatchTask: {
    path: '/sentiric.control.v1.TaskService/DispatchTask',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_control_v1_task_pb.DispatchTaskRequest,
    responseType: sentiric_control_v1_task_pb.DispatchTaskResponse,
    requestSerialize: serialize_sentiric_control_v1_DispatchTaskRequest,
    requestDeserialize: deserialize_sentiric_control_v1_DispatchTaskRequest,
    responseSerialize: serialize_sentiric_control_v1_DispatchTaskResponse,
    responseDeserialize: deserialize_sentiric_control_v1_DispatchTaskResponse,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService, 'TaskService');
