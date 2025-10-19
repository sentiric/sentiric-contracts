// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_external_v1_connector_pb = require('../../../sentiric/external/v1/connector_pb.js');

function serialize_sentiric_external_v1_ExecuteActionRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_connector_pb.ExecuteActionRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.ExecuteActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_ExecuteActionRequest(buffer_arg) {
  return sentiric_external_v1_connector_pb.ExecuteActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_ExecuteActionResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_connector_pb.ExecuteActionResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.ExecuteActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_ExecuteActionResponse(buffer_arg) {
  return sentiric_external_v1_connector_pb.ExecuteActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConnectorServiceService = exports.ConnectorServiceService = {
  executeAction: {
    path: '/sentiric.external.v1.ConnectorService/ExecuteAction',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_connector_pb.ExecuteActionRequest,
    responseType: sentiric_external_v1_connector_pb.ExecuteActionResponse,
    requestSerialize: serialize_sentiric_external_v1_ExecuteActionRequest,
    requestDeserialize: deserialize_sentiric_external_v1_ExecuteActionRequest,
    responseSerialize: serialize_sentiric_external_v1_ExecuteActionResponse,
    responseDeserialize: deserialize_sentiric_external_v1_ExecuteActionResponse,
  },
};

exports.ConnectorServiceClient = grpc.makeGenericClientConstructor(ConnectorServiceService, 'ConnectorService');
