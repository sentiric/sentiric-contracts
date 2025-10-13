// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_telephony_v1_action_pb = require('../../../sentiric/telephony/v1/action_pb.js');

function serialize_sentiric_telephony_v1_PlayAudioRequest(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.PlayAudioRequest)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.PlayAudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_PlayAudioRequest(buffer_arg) {
  return sentiric_telephony_v1_action_pb.PlayAudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_PlayAudioResponse(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.PlayAudioResponse)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.PlayAudioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_PlayAudioResponse(buffer_arg) {
  return sentiric_telephony_v1_action_pb.PlayAudioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_SendTextMessageRequest(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.SendTextMessageRequest)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.SendTextMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_SendTextMessageRequest(buffer_arg) {
  return sentiric_telephony_v1_action_pb.SendTextMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_SendTextMessageResponse(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.SendTextMessageResponse)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.SendTextMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_SendTextMessageResponse(buffer_arg) {
  return sentiric_telephony_v1_action_pb.SendTextMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_StartRecordingRequest(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.StartRecordingRequest)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.StartRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_StartRecordingRequest(buffer_arg) {
  return sentiric_telephony_v1_action_pb.StartRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_StartRecordingResponse(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.StartRecordingResponse)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.StartRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_StartRecordingResponse(buffer_arg) {
  return sentiric_telephony_v1_action_pb.StartRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_StopRecordingRequest(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.StopRecordingRequest)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.StopRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_StopRecordingRequest(buffer_arg) {
  return sentiric_telephony_v1_action_pb.StopRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_StopRecordingResponse(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.StopRecordingResponse)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.StopRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_StopRecordingResponse(buffer_arg) {
  return sentiric_telephony_v1_action_pb.StopRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_TerminateCallRequest(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.TerminateCallRequest)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.TerminateCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_TerminateCallRequest(buffer_arg) {
  return sentiric_telephony_v1_action_pb.TerminateCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_telephony_v1_TerminateCallResponse(arg) {
  if (!(arg instanceof sentiric_telephony_v1_action_pb.TerminateCallResponse)) {
    throw new Error('Expected argument of type sentiric.telephony.v1.TerminateCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_telephony_v1_TerminateCallResponse(buffer_arg) {
  return sentiric_telephony_v1_action_pb.TerminateCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TelephonyActionServiceService = exports.TelephonyActionServiceService = {
  playAudio: {
    path: '/sentiric.telephony.v1.TelephonyActionService/PlayAudio',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_telephony_v1_action_pb.PlayAudioRequest,
    responseType: sentiric_telephony_v1_action_pb.PlayAudioResponse,
    requestSerialize: serialize_sentiric_telephony_v1_PlayAudioRequest,
    requestDeserialize: deserialize_sentiric_telephony_v1_PlayAudioRequest,
    responseSerialize: serialize_sentiric_telephony_v1_PlayAudioResponse,
    responseDeserialize: deserialize_sentiric_telephony_v1_PlayAudioResponse,
  },
  // Değişti
terminateCall: {
    path: '/sentiric.telephony.v1.TelephonyActionService/TerminateCall',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_telephony_v1_action_pb.TerminateCallRequest,
    responseType: sentiric_telephony_v1_action_pb.TerminateCallResponse,
    requestSerialize: serialize_sentiric_telephony_v1_TerminateCallRequest,
    requestDeserialize: deserialize_sentiric_telephony_v1_TerminateCallRequest,
    responseSerialize: serialize_sentiric_telephony_v1_TerminateCallResponse,
    responseDeserialize: deserialize_sentiric_telephony_v1_TerminateCallResponse,
  },
  // Değişti
sendTextMessage: {
    path: '/sentiric.telephony.v1.TelephonyActionService/SendTextMessage',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_telephony_v1_action_pb.SendTextMessageRequest,
    responseType: sentiric_telephony_v1_action_pb.SendTextMessageResponse,
    requestSerialize: serialize_sentiric_telephony_v1_SendTextMessageRequest,
    requestDeserialize: deserialize_sentiric_telephony_v1_SendTextMessageRequest,
    responseSerialize: serialize_sentiric_telephony_v1_SendTextMessageResponse,
    responseDeserialize: deserialize_sentiric_telephony_v1_SendTextMessageResponse,
  },
  // Mesaj Adı Değişti
startRecording: {
    path: '/sentiric.telephony.v1.TelephonyActionService/StartRecording',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_telephony_v1_action_pb.StartRecordingRequest,
    responseType: sentiric_telephony_v1_action_pb.StartRecordingResponse,
    requestSerialize: serialize_sentiric_telephony_v1_StartRecordingRequest,
    requestDeserialize: deserialize_sentiric_telephony_v1_StartRecordingRequest,
    responseSerialize: serialize_sentiric_telephony_v1_StartRecordingResponse,
    responseDeserialize: deserialize_sentiric_telephony_v1_StartRecordingResponse,
  },
  // Değişti
stopRecording: {
    path: '/sentiric.telephony.v1.TelephonyActionService/StopRecording',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_telephony_v1_action_pb.StopRecordingRequest,
    responseType: sentiric_telephony_v1_action_pb.StopRecordingResponse,
    requestSerialize: serialize_sentiric_telephony_v1_StopRecordingRequest,
    requestDeserialize: deserialize_sentiric_telephony_v1_StopRecordingRequest,
    responseSerialize: serialize_sentiric_telephony_v1_StopRecordingResponse,
    responseDeserialize: deserialize_sentiric_telephony_v1_StopRecordingResponse,
  },
  // Değişti
};

exports.TelephonyActionServiceClient = grpc.makeGenericClientConstructor(TelephonyActionServiceService, 'TelephonyActionService');
