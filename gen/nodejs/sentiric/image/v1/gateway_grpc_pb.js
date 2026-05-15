// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_image_v1_gateway_pb = require('../../../sentiric/image/v1/gateway_pb.js');

function serialize_sentiric_image_v1_GenerateImageRequest(arg) {
  if (!(arg instanceof sentiric_image_v1_gateway_pb.GenerateImageRequest)) {
    throw new Error('Expected argument of type sentiric.image.v1.GenerateImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_image_v1_GenerateImageRequest(buffer_arg) {
  return sentiric_image_v1_gateway_pb.GenerateImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_image_v1_GenerateImageResponse(arg) {
  if (!(arg instanceof sentiric_image_v1_gateway_pb.GenerateImageResponse)) {
    throw new Error('Expected argument of type sentiric.image.v1.GenerateImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_image_v1_GenerateImageResponse(buffer_arg) {
  return sentiric_image_v1_gateway_pb.GenerateImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImageGatewayServiceService = exports.ImageGatewayServiceService = {
  generateImage: {
    path: '/sentiric.image.v1.ImageGatewayService/GenerateImage',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_image_v1_gateway_pb.GenerateImageRequest,
    responseType: sentiric_image_v1_gateway_pb.GenerateImageResponse,
    requestSerialize: serialize_sentiric_image_v1_GenerateImageRequest,
    requestDeserialize: deserialize_sentiric_image_v1_GenerateImageRequest,
    responseSerialize: serialize_sentiric_image_v1_GenerateImageResponse,
    responseDeserialize: deserialize_sentiric_image_v1_GenerateImageResponse,
  },
};

exports.ImageGatewayServiceClient = grpc.makeGenericClientConstructor(ImageGatewayServiceService, 'ImageGatewayService');
