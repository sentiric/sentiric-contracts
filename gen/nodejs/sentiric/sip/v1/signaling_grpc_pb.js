// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_sip_v1_signaling_pb = require('../../../sentiric/sip/v1/signaling_pb.js');

function serialize_sentiric_sip_v1_TerminateCallRequest(arg) {
  if (!(arg instanceof sentiric_sip_v1_signaling_pb.TerminateCallRequest)) {
    throw new Error('Expected argument of type sentiric.sip.v1.TerminateCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_TerminateCallRequest(buffer_arg) {
  return sentiric_sip_v1_signaling_pb.TerminateCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_sip_v1_TerminateCallResponse(arg) {
  if (!(arg instanceof sentiric_sip_v1_signaling_pb.TerminateCallResponse)) {
    throw new Error('Expected argument of type sentiric.sip.v1.TerminateCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_sip_v1_TerminateCallResponse(buffer_arg) {
  return sentiric_sip_v1_signaling_pb.TerminateCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// SipSignalingService, iç servislerin SIP sinyalleşme mantığını
// kontrol etmesi için gRPC metotları sunar.
var SipSignalingServiceService = exports.SipSignalingServiceService = {
  // Belirtilen Call-ID'ye sahip aktif bir çağrıyı kontrollü bir şekilde sonlandırır.
// Bu RPC, genellikle agent-service tarafından, diyalog akışı
// tamamlandığında çağrılır.
terminateCall: {
    path: '/sentiric.sip.v1.SipSignalingService/TerminateCall',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_sip_v1_signaling_pb.TerminateCallRequest,
    responseType: sentiric_sip_v1_signaling_pb.TerminateCallResponse,
    requestSerialize: serialize_sentiric_sip_v1_TerminateCallRequest,
    requestDeserialize: deserialize_sentiric_sip_v1_TerminateCallRequest,
    responseSerialize: serialize_sentiric_sip_v1_TerminateCallResponse,
    responseDeserialize: deserialize_sentiric_sip_v1_TerminateCallResponse,
  },
};

exports.SipSignalingServiceClient = grpc.makeGenericClientConstructor(SipSignalingServiceService, 'SipSignalingService');
