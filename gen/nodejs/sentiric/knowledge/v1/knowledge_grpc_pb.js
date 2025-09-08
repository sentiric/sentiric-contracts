// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_knowledge_v1_knowledge_pb = require('../../../sentiric/knowledge/v1/knowledge_pb.js');

function serialize_sentiric_knowledge_v1_QueryRequest(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_knowledge_pb.QueryRequest)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_QueryRequest(buffer_arg) {
  return sentiric_knowledge_v1_knowledge_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_knowledge_v1_QueryResponse(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_knowledge_pb.QueryResponse)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_QueryResponse(buffer_arg) {
  return sentiric_knowledge_v1_knowledge_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// KnowledgeService, kurumsal bilgi tabanını sorgulamak için metotlar sunar.
var KnowledgeServiceService = exports.KnowledgeServiceService = {
  // Verilen bir metin sorgusuna göre bilgi tabanında arama yapar.
query: {
    path: '/sentiric.knowledge.v1.KnowledgeService/Query',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_knowledge_v1_knowledge_pb.QueryRequest,
    responseType: sentiric_knowledge_v1_knowledge_pb.QueryResponse,
    requestSerialize: serialize_sentiric_knowledge_v1_QueryRequest,
    requestDeserialize: deserialize_sentiric_knowledge_v1_QueryRequest,
    responseSerialize: serialize_sentiric_knowledge_v1_QueryResponse,
    responseDeserialize: deserialize_sentiric_knowledge_v1_QueryResponse,
  },
};

exports.KnowledgeServiceClient = grpc.makeGenericClientConstructor(KnowledgeServiceService, 'KnowledgeService');
