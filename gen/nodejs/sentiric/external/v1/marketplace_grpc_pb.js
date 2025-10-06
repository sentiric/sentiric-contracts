// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_external_v1_marketplace_pb = require('../../../sentiric/external/v1/marketplace_pb.js');

function serialize_sentiric_external_v1_InstallRecipeRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_marketplace_pb.InstallRecipeRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.InstallRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_InstallRecipeRequest(buffer_arg) {
  return sentiric_external_v1_marketplace_pb.InstallRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_InstallRecipeResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_marketplace_pb.InstallRecipeResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.InstallRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_InstallRecipeResponse(buffer_arg) {
  return sentiric_external_v1_marketplace_pb.InstallRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_ListRecipesRequest(arg) {
  if (!(arg instanceof sentiric_external_v1_marketplace_pb.ListRecipesRequest)) {
    throw new Error('Expected argument of type sentiric.external.v1.ListRecipesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_ListRecipesRequest(buffer_arg) {
  return sentiric_external_v1_marketplace_pb.ListRecipesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_external_v1_ListRecipesResponse(arg) {
  if (!(arg instanceof sentiric_external_v1_marketplace_pb.ListRecipesResponse)) {
    throw new Error('Expected argument of type sentiric.external.v1.ListRecipesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_external_v1_ListRecipesResponse(buffer_arg) {
  return sentiric_external_v1_marketplace_pb.ListRecipesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketplaceServiceService = exports.MarketplaceServiceService = {
  listRecipes: {
    path: '/sentiric.external.v1.MarketplaceService/ListRecipes',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_marketplace_pb.ListRecipesRequest,
    responseType: sentiric_external_v1_marketplace_pb.ListRecipesResponse,
    requestSerialize: serialize_sentiric_external_v1_ListRecipesRequest,
    requestDeserialize: deserialize_sentiric_external_v1_ListRecipesRequest,
    responseSerialize: serialize_sentiric_external_v1_ListRecipesResponse,
    responseDeserialize: deserialize_sentiric_external_v1_ListRecipesResponse,
  },
  installRecipe: {
    path: '/sentiric.external.v1.MarketplaceService/InstallRecipe',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_external_v1_marketplace_pb.InstallRecipeRequest,
    responseType: sentiric_external_v1_marketplace_pb.InstallRecipeResponse,
    requestSerialize: serialize_sentiric_external_v1_InstallRecipeRequest,
    requestDeserialize: deserialize_sentiric_external_v1_InstallRecipeRequest,
    responseSerialize: serialize_sentiric_external_v1_InstallRecipeResponse,
    responseDeserialize: deserialize_sentiric_external_v1_InstallRecipeResponse,
  },
};

exports.MarketplaceServiceClient = grpc.makeGenericClientConstructor(MarketplaceServiceService, 'MarketplaceService');
