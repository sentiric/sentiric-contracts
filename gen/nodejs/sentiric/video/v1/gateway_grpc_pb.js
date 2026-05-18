// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_video_v1_gateway_pb = require('../../../sentiric/video/v1/gateway_pb.js');

function serialize_sentiric_video_v1_SubmitPortraitJobRequest(arg) {
  if (!(arg instanceof sentiric_video_v1_gateway_pb.SubmitPortraitJobRequest)) {
    throw new Error('Expected argument of type sentiric.video.v1.SubmitPortraitJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_video_v1_SubmitPortraitJobRequest(buffer_arg) {
  return sentiric_video_v1_gateway_pb.SubmitPortraitJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_video_v1_SubmitPortraitJobResponse(arg) {
  if (!(arg instanceof sentiric_video_v1_gateway_pb.SubmitPortraitJobResponse)) {
    throw new Error('Expected argument of type sentiric.video.v1.SubmitPortraitJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_video_v1_SubmitPortraitJobResponse(buffer_arg) {
  return sentiric_video_v1_gateway_pb.SubmitPortraitJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_video_v1_SubmitVideoJobRequest(arg) {
  if (!(arg instanceof sentiric_video_v1_gateway_pb.SubmitVideoJobRequest)) {
    throw new Error('Expected argument of type sentiric.video.v1.SubmitVideoJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_video_v1_SubmitVideoJobRequest(buffer_arg) {
  return sentiric_video_v1_gateway_pb.SubmitVideoJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_video_v1_SubmitVideoJobResponse(arg) {
  if (!(arg instanceof sentiric_video_v1_gateway_pb.SubmitVideoJobResponse)) {
    throw new Error('Expected argument of type sentiric.video.v1.SubmitVideoJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_video_v1_SubmitVideoJobResponse(buffer_arg) {
  return sentiric_video_v1_gateway_pb.SubmitVideoJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VideoGatewayServiceService = exports.VideoGatewayServiceService = {
  // Standart T2V/I2V İşleri (Wan2.1 / LTX)
submitVideoJob: {
    path: '/sentiric.video.v1.VideoGatewayService/SubmitVideoJob',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_video_v1_gateway_pb.SubmitVideoJobRequest,
    responseType: sentiric_video_v1_gateway_pb.SubmitVideoJobResponse,
    requestSerialize: serialize_sentiric_video_v1_SubmitVideoJobRequest,
    requestDeserialize: deserialize_sentiric_video_v1_SubmitVideoJobRequest,
    responseSerialize: serialize_sentiric_video_v1_SubmitVideoJobResponse,
    responseDeserialize: deserialize_sentiric_video_v1_SubmitVideoJobResponse,
  },
  // YENİ: Dudak Senkronu ve Portrait Animasyonu (LivePortrait / SadTalker)
submitPortraitJob: {
    path: '/sentiric.video.v1.VideoGatewayService/SubmitPortraitJob',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_video_v1_gateway_pb.SubmitPortraitJobRequest,
    responseType: sentiric_video_v1_gateway_pb.SubmitPortraitJobResponse,
    requestSerialize: serialize_sentiric_video_v1_SubmitPortraitJobRequest,
    requestDeserialize: deserialize_sentiric_video_v1_SubmitPortraitJobRequest,
    responseSerialize: serialize_sentiric_video_v1_SubmitPortraitJobResponse,
    responseDeserialize: deserialize_sentiric_video_v1_SubmitPortraitJobResponse,
  },
};

exports.VideoGatewayServiceClient = grpc.makeGenericClientConstructor(VideoGatewayServiceService, 'VideoGatewayService');
