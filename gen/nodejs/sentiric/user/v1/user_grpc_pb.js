// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// DOSYA: sentiric-contracts/proto/sentiric/user/v1/user.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_user_v1_user_pb = require('../../../sentiric/user/v1/user_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_sentiric_user_v1_CreateUserRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_CreateUserRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_CreateUserResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_CreateUserResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_GetUserRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_GetUserRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_GetUserResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_GetUserResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/sentiric.user.v1.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.GetUserRequest,
    responseType: sentiric_user_v1_user_pb.GetUserResponse,
    requestSerialize: serialize_sentiric_user_v1_GetUserRequest,
    requestDeserialize: deserialize_sentiric_user_v1_GetUserRequest,
    responseSerialize: serialize_sentiric_user_v1_GetUserResponse,
    responseDeserialize: deserialize_sentiric_user_v1_GetUserResponse,
  },
  createUser: {
    path: '/sentiric.user.v1.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.CreateUserRequest,
    responseType: sentiric_user_v1_user_pb.CreateUserResponse,
    requestSerialize: serialize_sentiric_user_v1_CreateUserRequest,
    requestDeserialize: deserialize_sentiric_user_v1_CreateUserRequest,
    responseSerialize: serialize_sentiric_user_v1_CreateUserResponse,
    responseDeserialize: deserialize_sentiric_user_v1_CreateUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
