// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_external_v1_notification_pb = require('../../../sentiric/external/v1/notification_pb.js');

function serialize_sentiric_external_v1_SendEmailRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_notification_pb.SendEmailRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.SendEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_SendEmailRequest(buffer_arg) {
  return sentiric_external_v1_notification_pb.SendEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_SendEmailResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_notification_pb.SendEmailResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.SendEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_SendEmailResponse(buffer_arg) {
  return sentiric_external_v1_notification_pb.SendEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_SendSMSRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_notification_pb.SendSMSRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.SendSMSRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_SendSMSRequest(buffer_arg) {
  return sentiric_external_v1_notification_pb.SendSMSRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_SendSMSResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_notification_pb.SendSMSResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.SendSMSResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_SendSMSResponse(buffer_arg) {
  return sentiric_external_v1_notification_pb.SendSMSResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotificationServiceService = exports.NotificationServiceService = {
  sendSMS: {
    path: '/sentiric.external.v1.NotificationService/SendSMS',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_notification_pb.SendSMSRequest,
    responseType: sentiric_external_v1_notification_pb.SendSMSResponse,
    requestSerialize: serialize_sentiric_external_v1_SendSMSRequest,
    requestDeserialize: deserialize_sentiric_external_v1_SendSMSRequest,
    responseSerialize: serialize_sentiric_external_v1_SendSMSResponse,
    responseDeserialize: deserialize_sentiric_external_v1_SendSMSResponse,
  },
  sendEmail: {
    path: '/sentiric.external.v1.NotificationService/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_notification_pb.SendEmailRequest,
    responseType: sentiric_external_v1_notification_pb.SendEmailResponse,
    requestSerialize: serialize_sentiric_external_v1_SendEmailRequest,
    requestDeserialize: deserialize_sentiric_external_v1_SendEmailRequest,
    responseSerialize: serialize_sentiric_external_v1_SendEmailResponse,
    responseDeserialize: deserialize_sentiric_external_v1_SendEmailResponse,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService, 'NotificationService');
