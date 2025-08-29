// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_user_v1_user_pb = require('../../../sentiric/user/v1/user_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_sentiric_user_v1_AddContactRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.AddContactRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.AddContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AddContactRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.AddContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_AddContactResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.AddContactResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.AddContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_AddContactResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.AddContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_sentiric_user_v1_DeleteContactRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.DeleteContactRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.DeleteContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_DeleteContactRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.DeleteContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_DeleteContactResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.DeleteContactResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.DeleteContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_DeleteContactResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.DeleteContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_DeleteUserRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_DeleteUserResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_DeleteUserResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_FindUserByContactRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.FindUserByContactRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.FindUserByContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_FindUserByContactRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.FindUserByContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_FindUserByContactResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.FindUserByContactResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.FindUserByContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_FindUserByContactResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.FindUserByContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_GetSipCredentialsRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.GetSipCredentialsRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.GetSipCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_GetSipCredentialsRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.GetSipCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_GetSipCredentialsResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.GetSipCredentialsResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.GetSipCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_GetSipCredentialsResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.GetSipCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_user_v1_UpdateContactRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.UpdateContactRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.UpdateContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_UpdateContactRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.UpdateContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_UpdateContactResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.UpdateContactResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.UpdateContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_UpdateContactResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.UpdateContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type sentiric.user.v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_UpdateUserRequest(buffer_arg) {
  return sentiric_user_v1_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_user_v1_UpdateUserResponse(arg) {
  if (!(arg instanceof sentiric_user_v1_user_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type sentiric.user.v1.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_user_v1_UpdateUserResponse(buffer_arg) {
  return sentiric_user_v1_user_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =================================================================
//                          SERVICE DEFINITION
// =================================================================
//
var UserServiceService = exports.UserServiceService = {
  // Temel okuma operasyonları
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
  findUserByContact: {
    path: '/sentiric.user.v1.UserService/FindUserByContact',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.FindUserByContactRequest,
    responseType: sentiric_user_v1_user_pb.FindUserByContactResponse,
    requestSerialize: serialize_sentiric_user_v1_FindUserByContactRequest,
    requestDeserialize: deserialize_sentiric_user_v1_FindUserByContactRequest,
    responseSerialize: serialize_sentiric_user_v1_FindUserByContactResponse,
    responseDeserialize: deserialize_sentiric_user_v1_FindUserByContactResponse,
  },
  // Yazma ve yönetim operasyonları
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
  updateUser: {
    path: '/sentiric.user.v1.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.UpdateUserRequest,
    responseType: sentiric_user_v1_user_pb.UpdateUserResponse,
    requestSerialize: serialize_sentiric_user_v1_UpdateUserRequest,
    requestDeserialize: deserialize_sentiric_user_v1_UpdateUserRequest,
    responseSerialize: serialize_sentiric_user_v1_UpdateUserResponse,
    responseDeserialize: deserialize_sentiric_user_v1_UpdateUserResponse,
  },
  deleteUser: {
    path: '/sentiric.user.v1.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.DeleteUserRequest,
    responseType: sentiric_user_v1_user_pb.DeleteUserResponse,
    requestSerialize: serialize_sentiric_user_v1_DeleteUserRequest,
    requestDeserialize: deserialize_sentiric_user_v1_DeleteUserRequest,
    responseSerialize: serialize_sentiric_user_v1_DeleteUserResponse,
    responseDeserialize: deserialize_sentiric_user_v1_DeleteUserResponse,
  },
  // Kontak yönetimi
addContact: {
    path: '/sentiric.user.v1.UserService/AddContact',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.AddContactRequest,
    responseType: sentiric_user_v1_user_pb.AddContactResponse,
    requestSerialize: serialize_sentiric_user_v1_AddContactRequest,
    requestDeserialize: deserialize_sentiric_user_v1_AddContactRequest,
    responseSerialize: serialize_sentiric_user_v1_AddContactResponse,
    responseDeserialize: deserialize_sentiric_user_v1_AddContactResponse,
  },
  updateContact: {
    path: '/sentiric.user.v1.UserService/UpdateContact',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.UpdateContactRequest,
    responseType: sentiric_user_v1_user_pb.UpdateContactResponse,
    requestSerialize: serialize_sentiric_user_v1_UpdateContactRequest,
    requestDeserialize: deserialize_sentiric_user_v1_UpdateContactRequest,
    responseSerialize: serialize_sentiric_user_v1_UpdateContactResponse,
    responseDeserialize: deserialize_sentiric_user_v1_UpdateContactResponse,
  },
  deleteContact: {
    path: '/sentiric.user.v1.UserService/DeleteContact',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.DeleteContactRequest,
    responseType: sentiric_user_v1_user_pb.DeleteContactResponse,
    requestSerialize: serialize_sentiric_user_v1_DeleteContactRequest,
    requestDeserialize: deserialize_sentiric_user_v1_DeleteContactRequest,
    responseSerialize: serialize_sentiric_user_v1_DeleteContactResponse,
    responseDeserialize: deserialize_sentiric_user_v1_DeleteContactResponse,
  },
  // Kimlik doğrulama için SIP bilgilerini getirir
getSipCredentials: {
    path: '/sentiric.user.v1.UserService/GetSipCredentials',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_user_v1_user_pb.GetSipCredentialsRequest,
    responseType: sentiric_user_v1_user_pb.GetSipCredentialsResponse,
    requestSerialize: serialize_sentiric_user_v1_GetSipCredentialsRequest,
    requestDeserialize: deserialize_sentiric_user_v1_GetSipCredentialsRequest,
    responseSerialize: serialize_sentiric_user_v1_GetSipCredentialsResponse,
    responseDeserialize: deserialize_sentiric_user_v1_GetSipCredentialsResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
