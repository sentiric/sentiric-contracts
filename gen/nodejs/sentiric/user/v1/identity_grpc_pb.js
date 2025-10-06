// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_user_v1_identity_pb = require('../../../sentiric/user/v1/identity_pb.js');

function serialize_sentiric_user_v1_AuthenticateRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_identity_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AuthenticateRequest(buffer_arg) {
  return sentiric_user_v1_identity_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_AuthenticateResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_identity_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AuthenticateResponse(buffer_arg) {
  return sentiric_user_v1_identity_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_AuthorizeTokenRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_identity_pb.AuthorizeTokenRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.AuthorizeTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AuthorizeTokenRequest(buffer_arg) {
  return sentiric_user_v1_identity_pb.AuthorizeTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_AuthorizeTokenResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_identity_pb.AuthorizeTokenResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.AuthorizeTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AuthorizeTokenResponse(buffer_arg) {
  return sentiric_user_v1_identity_pb.AuthorizeTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var IdentityServiceService = exports.IdentityServiceService = {
  authenticate: {
    path: '/sentiric.user.v1.IdentityService/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_identity_pb.AuthenticateRequest,
    responseType: sentiric_user_v1_identity_pb.AuthenticateResponse,
    requestSerialize: serialize_sentiric_user_v1_AuthenticateRequest,
    requestDeserialize: deserialize_sentiric_user_v1_AuthenticateRequest,
    responseSerialize: serialize_sentiric_user_v1_AuthenticateResponse,
    responseDeserialize: deserialize_sentiric_user_v1_AuthenticateResponse,
  },
  authorizeToken: {
    path: '/sentiric.user.v1.IdentityService/AuthorizeToken',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_identity_pb.AuthorizeTokenRequest,
    responseType: sentiric_user_v1_identity_pb.AuthorizeTokenResponse,
    requestSerialize: serialize_sentiric_user_v1_AuthorizeTokenRequest,
    requestDeserialize: deserialize_sentiric_user_v1_AuthorizeTokenRequest,
    responseSerialize: serialize_sentiric_user_v1_AuthorizeTokenResponse,
    responseDeserialize: deserialize_sentiric_user_v1_AuthorizeTokenResponse,
  },
};

exports.IdentityServiceClient = grpc.makeGenericClientConstructor(IdentityServiceService, 'IdentityService');
