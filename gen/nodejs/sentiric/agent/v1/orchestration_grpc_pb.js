// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_agent_v1_orchestration_pb = require('../../../sentiric/agent/v1/orchestration_pb.js');
var sentiric_data_v1_context_pb = require('../../../sentiric/data/v1/context_pb.js');

function serialize_sentiric_agent_v1_ProcessCallStartRequest(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessCallStartRequest)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessCallStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessCallStartRequest(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessCallStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_agent_v1_ProcessCallStartResponse(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessCallStartResponse)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessCallStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessCallStartResponse(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessCallStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_agent_v1_ProcessManualDialRequest(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessManualDialRequest)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessManualDialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessManualDialRequest(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessManualDialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_agent_v1_ProcessManualDialResponse(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessManualDialResponse)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessManualDialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessManualDialResponse(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessManualDialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_agent_v1_ProcessSagaStepRequest(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessSagaStepRequest)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessSagaStepRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessSagaStepRequest(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessSagaStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_agent_v1_ProcessSagaStepResponse(arg) {
  if (!(arg instanceof sentiric_agent_v1_orchestration_pb.ProcessSagaStepResponse)) {
    throw new Error('Expected argument of type sentiric.agent.v1.ProcessSagaStepResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_agent_v1_ProcessSagaStepResponse(buffer_arg) {
  return sentiric_agent_v1_orchestration_pb.ProcessSagaStepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AgentOrchestrationServiceService = exports.AgentOrchestrationServiceService = {
  // Gelen çağrıların başlatılması (Inbound)
processCallStart: {
    path: '/sentiric.agent.v1.AgentOrchestrationService/ProcessCallStart',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_agent_v1_orchestration_pb.ProcessCallStartRequest,
    responseType: sentiric_agent_v1_orchestration_pb.ProcessCallStartResponse,
    requestSerialize: serialize_sentiric_agent_v1_ProcessCallStartRequest,
    requestDeserialize: deserialize_sentiric_agent_v1_ProcessCallStartRequest,
    responseSerialize: serialize_sentiric_agent_v1_ProcessCallStartResponse,
    responseDeserialize: deserialize_sentiric_agent_v1_ProcessCallStartResponse,
  },
  // Manuel dış arama başlatma (Outbound) - YENİ
processManualDial: {
    path: '/sentiric.agent.v1.AgentOrchestrationService/ProcessManualDial',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_agent_v1_orchestration_pb.ProcessManualDialRequest,
    responseType: sentiric_agent_v1_orchestration_pb.ProcessManualDialResponse,
    requestSerialize: serialize_sentiric_agent_v1_ProcessManualDialRequest,
    requestDeserialize: deserialize_sentiric_agent_v1_ProcessManualDialRequest,
    responseSerialize: serialize_sentiric_agent_v1_ProcessManualDialResponse,
    responseDeserialize: deserialize_sentiric_agent_v1_ProcessManualDialResponse,
  },
  processSagaStep: {
    path: '/sentiric.agent.v1.AgentOrchestrationService/ProcessSagaStep',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_agent_v1_orchestration_pb.ProcessSagaStepRequest,
    responseType: sentiric_agent_v1_orchestration_pb.ProcessSagaStepResponse,
    requestSerialize: serialize_sentiric_agent_v1_ProcessSagaStepRequest,
    requestDeserialize: deserialize_sentiric_agent_v1_ProcessSagaStepRequest,
    responseSerialize: serialize_sentiric_agent_v1_ProcessSagaStepResponse,
    responseDeserialize: deserialize_sentiric_agent_v1_ProcessSagaStepResponse,
  },
};

exports.AgentOrchestrationServiceClient = grpc.makeGenericClientConstructor(AgentOrchestrationServiceService, 'AgentOrchestrationService');
