// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_external_v1_payment_pb = require('../../../sentiric/external/v1/payment_pb.js');

function serialize_sentiric_external_v1_InitiatePaymentRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_payment_pb.InitiatePaymentRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.InitiatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_InitiatePaymentRequest(buffer_arg) {
  return sentiric_external_v1_payment_pb.InitiatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_InitiatePaymentResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_payment_pb.InitiatePaymentResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.InitiatePaymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_InitiatePaymentResponse(buffer_arg) {
  return sentiric_external_v1_payment_pb.InitiatePaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PaymentServiceService = exports.PaymentServiceService = {
  initiatePayment: {
    path: '/sentiric.external.v1.PaymentService/InitiatePayment',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_payment_pb.InitiatePaymentRequest,
    responseType: sentiric_external_v1_payment_pb.InitiatePaymentResponse,
    requestSerialize: serialize_sentiric_external_v1_InitiatePaymentRequest,
    requestDeserialize: deserialize_sentiric_external_v1_InitiatePaymentRequest,
    responseSerialize: serialize_sentiric_external_v1_InitiatePaymentResponse,
    responseDeserialize: deserialize_sentiric_external_v1_InitiatePaymentResponse,
  },
};

exports.PaymentServiceClient = grpc.makeGenericClientConstructor(PaymentServiceService, 'PaymentService');
