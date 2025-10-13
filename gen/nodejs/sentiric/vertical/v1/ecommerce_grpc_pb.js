// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_ecommerce_pb = require('../../../sentiric/vertical/v1/ecommerce_pb.js');

function serialize_sentiric_vertical_v1_GetOrderStatusRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_ecommerce_pb.GetOrderStatusRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.GetOrderStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_GetOrderStatusRequest(buffer_arg) {
  return sentiric_vertical_v1_ecommerce_pb.GetOrderStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_GetOrderStatusResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_ecommerce_pb.GetOrderStatusResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.GetOrderStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_GetOrderStatusResponse(buffer_arg) {
  return sentiric_vertical_v1_ecommerce_pb.GetOrderStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EcommerceServiceService = exports.EcommerceServiceService = {
  getOrderStatus: {
    path: '/sentiric.vertical.v1.EcommerceService/GetOrderStatus',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_ecommerce_pb.GetOrderStatusRequest,
    responseType: sentiric_vertical_v1_ecommerce_pb.GetOrderStatusResponse,
    requestSerialize: serialize_sentiric_vertical_v1_GetOrderStatusRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_GetOrderStatusRequest,
    responseSerialize: serialize_sentiric_vertical_v1_GetOrderStatusResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_GetOrderStatusResponse,
  },
  // RPC Kuralı
};

exports.EcommerceServiceClient = grpc.makeGenericClientConstructor(EcommerceServiceService, 'EcommerceService');
