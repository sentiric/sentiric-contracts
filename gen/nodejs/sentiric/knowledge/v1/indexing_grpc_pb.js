// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_knowledge_v1_indexing_pb = require('../../../sentiric/knowledge/v1/indexing_pb.js');

function serialize_sentiric_knowledge_v1_TriggerReindexRequest(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_indexing_pb.TriggerReindexRequest)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.TriggerReindexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_TriggerReindexRequest(buffer_arg) {
  return sentiric_knowledge_v1_indexing_pb.TriggerReindexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_knowledge_v1_TriggerReindexResponse(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_indexing_pb.TriggerReindexResponse)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.TriggerReindexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_TriggerReindexResponse(buffer_arg) {
  return sentiric_knowledge_v1_indexing_pb.TriggerReindexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var KnowledgeIndexingServiceService = exports.KnowledgeIndexingServiceService = {
  triggerReindex: {
    path: '/sentiric.knowledge.v1.KnowledgeIndexingService/TriggerReindex',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_knowledge_v1_indexing_pb.TriggerReindexRequest,
    responseType: sentiric_knowledge_v1_indexing_pb.TriggerReindexResponse,
    requestSerialize: serialize_sentiric_knowledge_v1_TriggerReindexRequest,
    requestDeserialize: deserialize_sentiric_knowledge_v1_TriggerReindexRequest,
    responseSerialize: serialize_sentiric_knowledge_v1_TriggerReindexResponse,
    responseDeserialize: deserialize_sentiric_knowledge_v1_TriggerReindexResponse,
  },
};

exports.KnowledgeIndexingServiceClient = grpc.makeGenericClientConstructor(KnowledgeIndexingServiceService, 'KnowledgeIndexingService');
