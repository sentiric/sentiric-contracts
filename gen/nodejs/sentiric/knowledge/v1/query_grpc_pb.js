// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// proto/sentiric/knowledge/v1/query.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_knowledge_v1_query_pb = require('../../../sentiric/knowledge/v1/query_pb.js');

function serialize_sentiric_knowledge_v1_QueryRequest(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_query_pb.QueryRequest)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_QueryRequest(buffer_arg) {
  return sentiric_knowledge_v1_query_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_knowledge_v1_QueryResponse(arg) {
  if (!(arg instanceof sentiric_knowledge_v1_query_pb.QueryResponse)) {
    throw new Error('Expected argument of type sentiric.knowledge.v1.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_knowledge_v1_QueryResponse(buffer_arg) {
  return sentiric_knowledge_v1_query_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// KnowledgeQueryService, kurumsal bilgi tabanını sorgulamak için metotlar sunar.
var KnowledgeQueryServiceService = exports.KnowledgeQueryServiceService = {
  query: {
    path: '/sentiric.knowledge.v1.KnowledgeQueryService/Query',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_knowledge_v1_query_pb.QueryRequest,
    responseType: sentiric_knowledge_v1_query_pb.QueryResponse,
    requestSerialize: serialize_sentiric_knowledge_v1_QueryRequest,
    requestDeserialize: deserialize_sentiric_knowledge_v1_QueryRequest,
    responseSerialize: serialize_sentiric_knowledge_v1_QueryResponse,
    responseDeserialize: deserialize_sentiric_knowledge_v1_QueryResponse,
  },
};

exports.KnowledgeQueryServiceClient = grpc.makeGenericClientConstructor(KnowledgeQueryServiceService, 'KnowledgeQueryService');
