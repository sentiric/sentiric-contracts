// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_vertical_v1_finance_pb = require('../../../sentiric/vertical/v1/finance_pb.js');

function serialize_sentiric_vertical_v1_GetAccountBalanceRequest(arg) {
  if (!(arg instanceof sentiric_vertical_v1_finance_pb.GetAccountBalanceRequest)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.GetAccountBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_GetAccountBalanceRequest(buffer_arg) {
  return sentiric_vertical_v1_finance_pb.GetAccountBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_vertical_v1_GetAccountBalanceResponse(arg) {
  if (!(arg instanceof sentiric_vertical_v1_finance_pb.GetAccountBalanceResponse)) {
    throw new Error('Expected argument of type sentiric.vertical.v1.GetAccountBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_vertical_v1_GetAccountBalanceResponse(buffer_arg) {
  return sentiric_vertical_v1_finance_pb.GetAccountBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FinanceServiceService = exports.FinanceServiceService = {
  getAccountBalance: {
    path: '/sentiric.vertical.v1.FinanceService/GetAccountBalance',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_vertical_v1_finance_pb.GetAccountBalanceRequest,
    responseType: sentiric_vertical_v1_finance_pb.GetAccountBalanceResponse,
    requestSerialize: serialize_sentiric_vertical_v1_GetAccountBalanceRequest,
    requestDeserialize: deserialize_sentiric_vertical_v1_GetAccountBalanceRequest,
    responseSerialize: serialize_sentiric_vertical_v1_GetAccountBalanceResponse,
    responseDeserialize: deserialize_sentiric_vertical_v1_GetAccountBalanceResponse,
  },
  // RPC Kuralı
};

exports.FinanceServiceClient = grpc.makeGenericClientConstructor(FinanceServiceService, 'FinanceService');
