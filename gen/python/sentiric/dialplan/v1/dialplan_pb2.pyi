from sentiric.user.v1 import user_pb2 as _user_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ResolveDialplanRequest(_message.Message):
    __slots__ = ("caller_contact_value", "destination_number")
    CALLER_CONTACT_VALUE_FIELD_NUMBER: _ClassVar[int]
    DESTINATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    caller_contact_value: str
    destination_number: str
    def __init__(self, caller_contact_value: _Optional[str] = ..., destination_number: _Optional[str] = ...) -> None: ...

class ResolveDialplanResponse(_message.Message):
    __slots__ = ("dialplan_id", "tenant_id", "action", "matched_user", "matched_contact", "inbound_route")
    DIALPLAN_ID_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    MATCHED_USER_FIELD_NUMBER: _ClassVar[int]
    MATCHED_CONTACT_FIELD_NUMBER: _ClassVar[int]
    INBOUND_ROUTE_FIELD_NUMBER: _ClassVar[int]
    dialplan_id: str
    tenant_id: str
    action: DialplanAction
    matched_user: _user_pb2.User
    matched_contact: _user_pb2.Contact
    inbound_route: InboundRoute
    def __init__(self, dialplan_id: _Optional[str] = ..., tenant_id: _Optional[str] = ..., action: _Optional[_Union[DialplanAction, _Mapping]] = ..., matched_user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., matched_contact: _Optional[_Union[_user_pb2.Contact, _Mapping]] = ..., inbound_route: _Optional[_Union[InboundRoute, _Mapping]] = ...) -> None: ...

class InboundRoute(_message.Message):
    __slots__ = ("phone_number", "tenant_id", "active_dialplan_id", "off_hours_dialplan_id", "failsafe_dialplan_id", "is_maintenance_mode", "default_language_code")
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_DIALPLAN_ID_FIELD_NUMBER: _ClassVar[int]
    OFF_HOURS_DIALPLAN_ID_FIELD_NUMBER: _ClassVar[int]
    FAILSAFE_DIALPLAN_ID_FIELD_NUMBER: _ClassVar[int]
    IS_MAINTENANCE_MODE_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_LANGUAGE_CODE_FIELD_NUMBER: _ClassVar[int]
    phone_number: str
    tenant_id: str
    active_dialplan_id: str
    off_hours_dialplan_id: str
    failsafe_dialplan_id: str
    is_maintenance_mode: bool
    default_language_code: str
    def __init__(self, phone_number: _Optional[str] = ..., tenant_id: _Optional[str] = ..., active_dialplan_id: _Optional[str] = ..., off_hours_dialplan_id: _Optional[str] = ..., failsafe_dialplan_id: _Optional[str] = ..., is_maintenance_mode: _Optional[bool] = ..., default_language_code: _Optional[str] = ...) -> None: ...

class Dialplan(_message.Message):
    __slots__ = ("id", "tenant_id", "description", "action")
    ID_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    tenant_id: str
    description: str
    action: DialplanAction
    def __init__(self, id: _Optional[str] = ..., tenant_id: _Optional[str] = ..., description: _Optional[str] = ..., action: _Optional[_Union[DialplanAction, _Mapping]] = ...) -> None: ...

class DialplanAction(_message.Message):
    __slots__ = ("action", "action_data")
    ACTION_FIELD_NUMBER: _ClassVar[int]
    ACTION_DATA_FIELD_NUMBER: _ClassVar[int]
    action: str
    action_data: ActionData
    def __init__(self, action: _Optional[str] = ..., action_data: _Optional[_Union[ActionData, _Mapping]] = ...) -> None: ...

class ActionData(_message.Message):
    __slots__ = ("data",)
    class DataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DATA_FIELD_NUMBER: _ClassVar[int]
    data: _containers.ScalarMap[str, str]
    def __init__(self, data: _Optional[_Mapping[str, str]] = ...) -> None: ...

class CreateInboundRouteRequest(_message.Message):
    __slots__ = ("route",)
    ROUTE_FIELD_NUMBER: _ClassVar[int]
    route: InboundRoute
    def __init__(self, route: _Optional[_Union[InboundRoute, _Mapping]] = ...) -> None: ...

class GetInboundRouteRequest(_message.Message):
    __slots__ = ("phone_number",)
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    phone_number: str
    def __init__(self, phone_number: _Optional[str] = ...) -> None: ...

class UpdateInboundRouteRequest(_message.Message):
    __slots__ = ("route",)
    ROUTE_FIELD_NUMBER: _ClassVar[int]
    route: InboundRoute
    def __init__(self, route: _Optional[_Union[InboundRoute, _Mapping]] = ...) -> None: ...

class DeleteInboundRouteRequest(_message.Message):
    __slots__ = ("phone_number",)
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    phone_number: str
    def __init__(self, phone_number: _Optional[str] = ...) -> None: ...

class DeleteInboundRouteResponse(_message.Message):
    __slots__ = ("success",)
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: _Optional[bool] = ...) -> None: ...

class ListInboundRoutesRequest(_message.Message):
    __slots__ = ("tenant_id", "page_size", "page")
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    page_size: int
    page: int
    def __init__(self, tenant_id: _Optional[str] = ..., page_size: _Optional[int] = ..., page: _Optional[int] = ...) -> None: ...

class ListInboundRoutesResponse(_message.Message):
    __slots__ = ("routes", "total_count")
    ROUTES_FIELD_NUMBER: _ClassVar[int]
    TOTAL_COUNT_FIELD_NUMBER: _ClassVar[int]
    routes: _containers.RepeatedCompositeFieldContainer[InboundRoute]
    total_count: int
    def __init__(self, routes: _Optional[_Iterable[_Union[InboundRoute, _Mapping]]] = ..., total_count: _Optional[int] = ...) -> None: ...

class CreateDialplanRequest(_message.Message):
    __slots__ = ("dialplan",)
    DIALPLAN_FIELD_NUMBER: _ClassVar[int]
    dialplan: Dialplan
    def __init__(self, dialplan: _Optional[_Union[Dialplan, _Mapping]] = ...) -> None: ...

class GetDialplanRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class UpdateDialplanRequest(_message.Message):
    __slots__ = ("dialplan",)
    DIALPLAN_FIELD_NUMBER: _ClassVar[int]
    dialplan: Dialplan
    def __init__(self, dialplan: _Optional[_Union[Dialplan, _Mapping]] = ...) -> None: ...

class DeleteDialplanRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class DeleteDialplanResponse(_message.Message):
    __slots__ = ("success",)
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: _Optional[bool] = ...) -> None: ...

class ListDialplansRequest(_message.Message):
    __slots__ = ("tenant_id", "page_size", "page")
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    page_size: int
    page: int
    def __init__(self, tenant_id: _Optional[str] = ..., page_size: _Optional[int] = ..., page: _Optional[int] = ...) -> None: ...

class ListDialplansResponse(_message.Message):
    __slots__ = ("dialplans", "total_count")
    DIALPLANS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_COUNT_FIELD_NUMBER: _ClassVar[int]
    dialplans: _containers.RepeatedCompositeFieldContainer[Dialplan]
    total_count: int
    def __init__(self, dialplans: _Optional[_Iterable[_Union[Dialplan, _Mapping]]] = ..., total_count: _Optional[int] = ...) -> None: ...
