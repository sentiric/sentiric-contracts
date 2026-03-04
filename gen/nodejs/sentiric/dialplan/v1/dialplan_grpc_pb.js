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

function serialize_sentiric_dialplan_v1_CreateDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_CreateInboundRouteResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateInboundRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateInboundRouteResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_CreateQueueRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateQueueRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateQueueRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_CreateQueueResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateQueueResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateQueueResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_CreateScheduleRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateScheduleRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateScheduleRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_CreateScheduleResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.CreateScheduleResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.CreateScheduleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_CreateScheduleResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.CreateScheduleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_DeleteQueueRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteQueueRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteQueueRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_DeleteQueueResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.DeleteQueueResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.DeleteQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_DeleteQueueResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.DeleteQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_GetDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_GetInboundRouteResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetInboundRouteResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetInboundRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetInboundRouteResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetInboundRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetQueueRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetQueueRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetQueueRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetQueueResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetQueueResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetQueueResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetScheduleRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetScheduleRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetScheduleRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_GetScheduleResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.GetScheduleResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.GetScheduleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_GetScheduleResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.GetScheduleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_ListQueuesRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListQueuesRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListQueuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListQueuesRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListQueuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_ListQueuesResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.ListQueuesResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.ListQueuesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_ListQueuesResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.ListQueuesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_UpdateDialplanResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateDialplanResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateDialplanResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sentiric_dialplan_v1_UpdateInboundRouteResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateInboundRouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateInboundRouteResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_UpdateQueueRequest(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateQueueRequest)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateQueueRequest(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sentiric_dialplan_v1_UpdateQueueResponse(arg) {
  if (!(arg instanceof sentiric_dialplan_v1_dialplan_pb.UpdateQueueResponse)) {
    throw new Error('Expected argument of type sentiric.dialplan.v1.UpdateQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sentiric_dialplan_v1_UpdateQueueResponse(buffer_arg) {
  return sentiric_dialplan_v1_dialplan_pb.UpdateQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// =================================================================
//                            SERVICE DEFINITION
// =================================================================
//
var DialplanServiceService = exports.DialplanServiceService = {
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
  // Inbound Route
createInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.CreateInboundRouteResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_CreateInboundRouteResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_CreateInboundRouteResponse,
  },
  getInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/GetInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.GetInboundRouteResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_GetInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_GetInboundRouteResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_GetInboundRouteResponse,
  },
  updateInboundRoute: {
    path: '/sentiric.dialplan.v1.DialplanService/UpdateInboundRoute',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.UpdateInboundRouteResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_UpdateInboundRouteRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_UpdateInboundRouteRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_UpdateInboundRouteResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_UpdateInboundRouteResponse,
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
  // Dialplan
createDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.CreateDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_CreateDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_CreateDialplanResponse,
  },
  getDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/GetDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.GetDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_GetDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_GetDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_GetDialplanResponse,
  },
  updateDialplan: {
    path: '/sentiric.dialplan.v1.DialplanService/UpdateDialplan',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.UpdateDialplanRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.UpdateDialplanResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_UpdateDialplanRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_UpdateDialplanRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_UpdateDialplanResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_UpdateDialplanResponse,
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
  // [YENİ] Queue (Kuyruk) Yönetimi
createQueue: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateQueue',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateQueueRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.CreateQueueResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateQueueRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateQueueRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_CreateQueueResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_CreateQueueResponse,
  },
  getQueue: {
    path: '/sentiric.dialplan.v1.DialplanService/GetQueue',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetQueueRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.GetQueueResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_GetQueueRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetQueueRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_GetQueueResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_GetQueueResponse,
  },
  updateQueue: {
    path: '/sentiric.dialplan.v1.DialplanService/UpdateQueue',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.UpdateQueueRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.UpdateQueueResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_UpdateQueueRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_UpdateQueueRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_UpdateQueueResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_UpdateQueueResponse,
  },
  deleteQueue: {
    path: '/sentiric.dialplan.v1.DialplanService/DeleteQueue',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.DeleteQueueRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.DeleteQueueResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_DeleteQueueRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_DeleteQueueRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_DeleteQueueResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_DeleteQueueResponse,
  },
  listQueues: {
    path: '/sentiric.dialplan.v1.DialplanService/ListQueues',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.ListQueuesRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.ListQueuesResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_ListQueuesRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_ListQueuesRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_ListQueuesResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_ListQueuesResponse,
  },
  // [YENİ] Schedule (Zamanlama) Yönetimi
createSchedule: {
    path: '/sentiric.dialplan.v1.DialplanService/CreateSchedule',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.CreateScheduleRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.CreateScheduleResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_CreateScheduleRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_CreateScheduleRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_CreateScheduleResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_CreateScheduleResponse,
  },
  getSchedule: {
    path: '/sentiric.dialplan.v1.DialplanService/GetSchedule',
    requestStream: false,
    responseStream: false,
    requestType: sentiric_dialplan_v1_dialplan_pb.GetScheduleRequest,
    responseType: sentiric_dialplan_v1_dialplan_pb.GetScheduleResponse,
    requestSerialize: serialize_sentiric_dialplan_v1_GetScheduleRequest,
    requestDeserialize: deserialize_sentiric_dialplan_v1_GetScheduleRequest,
    responseSerialize: serialize_sentiric_dialplan_v1_GetScheduleResponse,
    responseDeserialize: deserialize_sentiric_dialplan_v1_GetScheduleResponse,
  },
};

exports.DialplanServiceClient = grpc.makeGenericClientConstructor(DialplanServiceService, 'DialplanService');
