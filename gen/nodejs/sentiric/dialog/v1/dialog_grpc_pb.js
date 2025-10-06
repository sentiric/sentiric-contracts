// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_dialog_v1_dialog_pb = require('../../../sentiric/dialog/v1/dialog_pb.js');
var sentiric_data_v1_context_pb = require('../../../sentiric/data/v1/context_pb.js');

function serialize_sentiric_dialog_v1_ProcessUserInputRequest(arg) {
  if (!(arg instanceof sentiric_dialog_v1_dialog_pb.ProcessUserInputRequest)) {
    throw new Error('Expected argument of type sentiric.dialog.v1.ProcessUserInputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialog_v1_ProcessUserInputRequest(buffer_arg) {
  return sentiric_dialog_v1_dialog_pb.ProcessUserInputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialog_v1_ProcessUserInputResponse(arg) {
  if (!(arg instanceof sentiric_dialog_v1_dialog_pb.ProcessUserInputResponse)) {
    throw new Error('Expected argument of type sentiric.dialog.v1.ProcessUserInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialog_v1_ProcessUserInputResponse(buffer_arg) {
  return sentiric_dialog_v1_dialog_pb.ProcessUserInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialog_v1_StartDialogRequest(arg) {
  if (!(arg instanceof sentiric_dialog_v1_dialog_pb.StartDialogRequest)) {
    throw new Error('Expected argument of type sentiric.dialog.v1.StartDialogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialog_v1_StartDialogRequest(buffer_arg) {
  return sentiric_dialog_v1_dialog_pb.StartDialogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialog_v1_StartDialogResponse(arg) {
  if (!(arg instanceof sentiric_dialog_v1_dialog_pb.StartDialogResponse)) {
    throw new Error('Expected argument of type sentiric.dialog.v1.StartDialogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialog_v1_StartDialogResponse(buffer_arg) {
  return sentiric_dialog_v1_dialog_pb.StartDialogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DialogServiceService = exports.DialogServiceService = {
  startDialog: {
    path: '/sentiric.dialog.v1.DialogService/StartDialog',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialog_v1_dialog_pb.StartDialogRequest,
    responseType: sentiric_dialog_v1_dialog_pb.StartDialogResponse,
    requestSerialize: serialize_sentiric_dialog_v1_StartDialogRequest,
    requestDeserialize: deserialize_sentiric_dialog_v1_StartDialogRequest,
    responseSerialize: serialize_sentiric_dialog_v1_StartDialogResponse,
    responseDeserialize: deserialize_sentiric_dialog_v1_StartDialogResponse,
  },
  processUserInput: {
    path: '/sentiric.dialog.v1.DialogService/ProcessUserInput',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialog_v1_dialog_pb.ProcessUserInputRequest,
    responseType: sentiric_dialog_v1_dialog_pb.ProcessUserInputResponse,
    requestSerialize: serialize_sentiric_dialog_v1_ProcessUserInputRequest,
    requestDeserialize: deserialize_sentiric_dialog_v1_ProcessUserInputRequest,
    responseSerialize: serialize_sentiric_dialog_v1_ProcessUserInputResponse,
    responseDeserialize: deserialize_sentiric_dialog_v1_ProcessUserInputResponse,
  },
};

exports.DialogServiceClient = grpc.makeGenericClientConstructor(DialogServiceService, 'DialogService');
