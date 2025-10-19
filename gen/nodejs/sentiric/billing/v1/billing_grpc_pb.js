// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_billing_v1_billing_pb = require('../../../sentiric/billing/v1/billing_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_sentiric_billing_v1_ProcessUsageRequest(arg) {
  if (!(arg instanceof sentiric_billing_v1_billing_pb.ProcessUsageRequest)) {
    throw new Error('Expected argument of type sentiric.billing.v1.ProcessUsageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_billing_v1_ProcessUsageRequest(buffer_arg) {
  return sentiric_billing_v1_billing_pb.ProcessUsageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_billing_v1_ProcessUsageResponse(arg) {
  if (!(arg instanceof sentiric_billing_v1_billing_pb.ProcessUsageResponse)) {
    throw new Error('Expected argument of type sentiric.billing.v1.ProcessUsageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_billing_v1_ProcessUsageResponse(buffer_arg) {
  return sentiric_billing_v1_billing_pb.ProcessUsageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  processUsage: {
    path: '/sentiric.billing.v1.BillingService/ProcessUsage',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_billing_v1_billing_pb.ProcessUsageRequest,
    responseType: sentiric_billing_v1_billing_pb.ProcessUsageResponse,
    requestSerialize: serialize_sentiric_billing_v1_ProcessUsageRequest,
    requestDeserialize: deserialize_sentiric_billing_v1_ProcessUsageRequest,
    responseSerialize: serialize_sentiric_billing_v1_ProcessUsageResponse,
    responseDeserialize: deserialize_sentiric_billing_v1_ProcessUsageResponse,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService, 'BillingService');
