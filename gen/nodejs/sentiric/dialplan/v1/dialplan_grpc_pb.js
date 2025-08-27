// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sentiric_dialplan_v1_dialplan_pb = require('../../../sentiric/dialplan/v1/dialplan_pb.js');
var sentiric_user_v1_user_pb = require('../../../sentiric/user/v1/user_pb.js');

function serialize_sentiric_dialplan_v1_CreateDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_CreateInboundRouteRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateInboundRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateInboundRouteRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_DeleteDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_DeleteDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_DeleteInboundRouteRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteInboundRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteInboundRouteRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_DeleteInboundRouteResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteInboundRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteInboundRouteResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_Dialplan(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.Dialplan)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.Dialplan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_Dialplan(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.Dialplan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetInboundRouteRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetInboundRouteRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetInboundRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetInboundRouteRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetInboundRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_InboundRoute(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.InboundRoute)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.InboundRoute');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_InboundRoute(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.InboundRoute.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ListDialplansRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListDialplansRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListDialplansRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListDialplansRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListDialplansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ListDialplansResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListDialplansResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListDialplansResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListDialplansResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListDialplansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ListInboundRoutesRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListInboundRoutesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListInboundRoutesRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ListInboundRoutesResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListInboundRoutesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListInboundRoutesResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ResolveDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ResolveDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ResolveDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ResolveDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ResolveDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ResolveDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_UpdateDialplanRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateDialplanRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateDialplanRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_UpdateInboundRouteRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateInboundRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateInboundRouteRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// =================================================================
//                            SERVICE DEFINITION
// =================================================================
//
var DialplanServiceService = exports.DialplanServiceService = {
  // Ana karar mekanizması RPC'si
resolveDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/ResolveDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.ResolveDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.ResolveDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_ResolveDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_ResolveDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_ResolveDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_ResolveDialplanResponse,
  },
  // Inbound Route Yönetimi
createInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.InboundRoute,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_InboundRoute,
    responseDeserialize: deserialize_sentiric_dialplan_v1_InboundRoute,
  },
  getInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/GetInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.InboundRoute,
    requestSerialize: serialize_sentiric_dialplan_v1_GetInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_InboundRoute,
    responseDeserialize: deserialize_sentiric_dialplan_v1_InboundRoute,
  },
  updateInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/UpdateInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.InboundRoute,
    requestSerialize: serialize_sentiric_dialplan_v1_UpdateInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_UpdateInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_InboundRoute,
    responseDeserialize: deserialize_sentiric_dialplan_v1_InboundRoute,
  },
  deleteInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/DeleteInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.DeleteInboundRouteResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_DeleteInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_DeleteInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_DeleteInboundRouteResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_DeleteInboundRouteResponse,
  },
  listInboundRoutes: {
    path: '/sentiric.dialplan.v1.DialplanService/ListInboundRoutes',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.ListInboundRoutesResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_ListInboundRoutesRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_ListInboundRoutesRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_ListInboundRoutesResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_ListInboundRoutesResponse,
  },
  // Dialplan Yönetimi
createDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.Dialplan,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_Dialplan,
    responseDeserialize: deserialize_sentiric_dialplan_v1_Dialplan,
  },
  getDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/GetDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.Dialplan,
    requestSerialize: serialize_sentiric_dialplan_v1_GetDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_Dialplan,
    responseDeserialize: deserialize_sentiric_dialplan_v1_Dialplan,
  },
  updateDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/UpdateDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.UpdateDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.Dialplan,
    requestSerialize: serialize_sentiric_dialplan_v1_UpdateDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_UpdateDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_Dialplan,
    responseDeserialize: deserialize_sentiric_dialplan_v1_Dialplan,
  },
  deleteDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/DeleteDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.DeleteDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.DeleteDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_DeleteDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_DeleteDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_DeleteDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_DeleteDialplanResponse,
  },
  listDialplans: {
    path: '/sentiric.dialplan.v1.DialplanService/ListDialplans',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.ListDialplansRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.ListDialplansResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_ListDialplansRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_ListDialplansRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_ListDialplansResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_ListDialplansResponse,
  },
};

exports.DialplanServiceClient = grpc.makeGenericClientConstructor(DialplanServiceService, 'DialplanService');
