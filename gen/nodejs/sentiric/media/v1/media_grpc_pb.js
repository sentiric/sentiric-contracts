// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// DOSYA: sentiric-contracts/proto/sentiric/media/v1/media.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_media_v1_media_pb = require('../../../sentiric/media/v1/media_pb.js');

function serialize_sentiric_media_v1_AllocatePortRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.AllocatePortRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.AllocatePortRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_AllocatePortRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.AllocatePortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_AllocatePortResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.AllocatePortResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.AllocatePortResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_AllocatePortResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.AllocatePortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_PlayAudioRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.PlayAudioRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.PlayAudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_PlayAudioRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.PlayAudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_PlayAudioResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.PlayAudioResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.PlayAudioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_PlayAudioResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.PlayAudioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_RecordAudioRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.RecordAudioRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.RecordAudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_RecordAudioRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.RecordAudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_RecordAudioResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.RecordAudioResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.RecordAudioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_RecordAudioResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.RecordAudioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_ReleasePortRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.ReleasePortRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.ReleasePortRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_ReleasePortRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.ReleasePortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_ReleasePortResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.ReleasePortResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.ReleasePortResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_ReleasePortResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.ReleasePortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_StartRecordingRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.StartRecordingRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.StartRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_StartRecordingRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.StartRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_StartRecordingResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.StartRecordingResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.StartRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_StartRecordingResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.StartRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_StopRecordingRequest(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.StopRecordingRequest)) {
    throw new Error('Expected argument of type sentiric.media.v1.StopRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_StopRecordingRequest(buffer_arg) {
  return sentiric_media_v1_media_pb.StopRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_media_v1_StopRecordingResponse(arg) {
  if (!(arg instanceof sentiric_media_v1_media_pb.StopRecordingResponse)) {
    throw new Error('Expected argument of type sentiric.media.v1.StopRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_media_v1_StopRecordingResponse(buffer_arg) {
  return sentiric_media_v1_media_pb.StopRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MediaServiceService = exports.MediaServiceService = {
  allocatePort: {
    path: '/sentiric.media.v1.MediaService/AllocatePort',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_media_v1_media_pb.AllocatePortRequest,
    responseType: sentiric_media_v1_media_pb.AllocatePortResponse,
    requestSerialize: serialize_sentiric_media_v1_AllocatePortRequest,
    requestDeserialize: deserialize_sentiric_media_v1_AllocatePortRequest,
    responseSerialize: serialize_sentiric_media_v1_AllocatePortResponse,
    responseDeserialize: deserialize_sentiric_media_v1_AllocatePortResponse,
  },
  releasePort: {
    path: '/sentiric.media.v1.MediaService/ReleasePort',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_media_v1_media_pb.ReleasePortRequest,
    responseType: sentiric_media_v1_media_pb.ReleasePortResponse,
    requestSerialize: serialize_sentiric_media_v1_ReleasePortRequest,
    requestDeserialize: deserialize_sentiric_media_v1_ReleasePortRequest,
    responseSerialize: serialize_sentiric_media_v1_ReleasePortResponse,
    responseDeserialize: deserialize_sentiric_media_v1_ReleasePortResponse,
  },
  playAudio: {
    path: '/sentiric.media.v1.MediaService/PlayAudio',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_media_v1_media_pb.PlayAudioRequest,
    responseType: sentiric_media_v1_media_pb.PlayAudioResponse,
    requestSerialize: serialize_sentiric_media_v1_PlayAudioRequest,
    requestDeserialize: deserialize_sentiric_media_v1_PlayAudioRequest,
    responseSerialize: serialize_sentiric_media_v1_PlayAudioResponse,
    responseDeserialize: deserialize_sentiric_media_v1_PlayAudioResponse,
  },
  recordAudio: {
    path: '/sentiric.media.v1.MediaService/RecordAudio',
    requestStream: false,
    responseStream: true,
    requestType: sentiric_media_v1_media_pb.RecordAudioRequest,
    responseType: sentiric_media_v1_media_pb.RecordAudioResponse,
    requestSerialize: serialize_sentiric_media_v1_RecordAudioRequest,
    requestDeserialize: deserialize_sentiric_media_v1_RecordAudioRequest,
    responseSerialize: serialize_sentiric_media_v1_RecordAudioResponse,
    responseDeserialize: deserialize_sentiric_media_v1_RecordAudioResponse,
  },
  // YENİ RPC'LER
startRecording: {
    path: '/sentiric.media.v1.MediaService/StartRecording',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_media_v1_media_pb.StartRecordingRequest,
    responseType: sentiric_media_v1_media_pb.StartRecordingResponse,
    requestSerialize: serialize_sentiric_media_v1_StartRecordingRequest,
    requestDeserialize: deserialize_sentiric_media_v1_StartRecordingRequest,
    responseSerialize: serialize_sentiric_media_v1_StartRecordingResponse,
    responseDeserialize: deserialize_sentiric_media_v1_StartRecordingResponse,
  },
  stopRecording: {
    path: '/sentiric.media.v1.MediaService/StopRecording',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_media_v1_media_pb.StopRecordingRequest,
    responseType: sentiric_media_v1_media_pb.StopRecordingResponse,
    requestSerialize: serialize_sentiric_media_v1_StopRecordingRequest,
    requestDeserialize: deserialize_sentiric_media_v1_StopRecordingRequest,
    responseSerialize: serialize_sentiric_media_v1_StopRecordingResponse,
    responseDeserialize: deserialize_sentiric_media_v1_StopRecordingResponse,
  },
};

exports.MediaServiceClient = grpc.makeGenericClientConstructor(MediaServiceService, 'MediaService');
