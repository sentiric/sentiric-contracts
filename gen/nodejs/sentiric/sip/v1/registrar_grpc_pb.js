// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_registrar_pb = require('../../../sentiric/sip/v1/registrar_pb.js');

function serialize_sentiric_sip_v1_LookupContactRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.LookupContactRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.LookupContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_LookupContactRequest(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.LookupContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_LookupContactResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.LookupContactResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.LookupContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_LookupContactResponse(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.LookupContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_RegisterRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.RegisterRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_RegisterRequest(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_RegisterResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.RegisterResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_RegisterResponse(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_UnregisterRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.UnregisterRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.UnregisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_UnregisterRequest(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.UnregisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_UnregisterResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_registrar_pb.UnregisterResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.UnregisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_UnregisterResponse(buffer_arg) {
  return sentiric_sip_v1_registrar_pb.UnregisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// RegistrarService, SIP uç noktalarının kaydını yönetir.
var RegistrarServiceService = exports.RegistrarServiceService = {
  register: {
    path: '/sentiric.sip.v1.RegistrarService/Register',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_registrar_pb.RegisterRequest,
    responseType: sentiric_sip_v1_registrar_pb.RegisterResponse,
    requestSerialize: serialize_sentiric_sip_v1_RegisterRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_RegisterRequest,
    responseSerialize: serialize_sentiric_sip_v1_RegisterResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_RegisterResponse,
  },
  unregister: {
    path: '/sentiric.sip.v1.RegistrarService/Unregister',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_registrar_pb.UnregisterRequest,
    responseType: sentiric_sip_v1_registrar_pb.UnregisterResponse,
    requestSerialize: serialize_sentiric_sip_v1_UnregisterRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_UnregisterRequest,
    responseSerialize: serialize_sentiric_sip_v1_UnregisterResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_UnregisterResponse,
  },
  lookupContact: {
    path: '/sentiric.sip.v1.RegistrarService/LookupContact',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_registrar_pb.LookupContactRequest,
    responseType: sentiric_sip_v1_registrar_pb.LookupContactResponse,
    requestSerialize: serialize_sentiric_sip_v1_LookupContactRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_LookupContactRequest,
    responseSerialize: serialize_sentiric_sip_v1_LookupContactResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_LookupContactResponse,
  },
};

exports.RegistrarServiceClient = grpc.makeGenericClientConstructor(RegistrarServiceService, 'RegistrarService');
