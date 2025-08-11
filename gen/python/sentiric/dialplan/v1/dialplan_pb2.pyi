from sentiric.user.v1 import user_pb2 as _user_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ResolveDialplanRequest(_message.Message):
    __slots__ = ("caller_contact_value", "destination_number")
    CALLER_CONTACT_VALUE_FIELD_NUMBER: _ClassVar[int]
    DESTINATION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    caller_contact_value: str
    destination_number: str
    def __init__(self, caller_contact_value: _Optional[str] = ..., destination_number: _Optional[str] = ...) -> None: ...

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

class DialplanAction(_message.Message):
    __slots__ = ("action", "action_data")
    ACTION_FIELD_NUMBER: _ClassVar[int]
    ACTION_DATA_FIELD_NUMBER: _ClassVar[int]
    action: str
    action_data: ActionData
    def __init__(self, action: _Optional[str] = ..., action_data: _Optional[_Union[ActionData, _Mapping]] = ...) -> None: ...

class ResolveDialplanResponse(_message.Message):
    __slots__ = ("dialplan_id", "tenant_id", "action", "matched_user", "matched_contact")
    DIALPLAN_ID_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    MATCHED_USER_FIELD_NUMBER: _ClassVar[int]
    MATCHED_CONTACT_FIELD_NUMBER: _ClassVar[int]
    dialplan_id: str
    tenant_id: str
    action: DialplanAction
    matched_user: _user_pb2.User
    matched_contact: _user_pb2.Contact
    def __init__(self, dialplan_id: _Optional[str] = ..., tenant_id: _Optional[str] = ..., action: _Optional[_Union[DialplanAction, _Mapping]] = ..., matched_user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., matched_contact: _Optional[_Union[_user_pb2.Contact, _Mapping]] = ...) -> None: ...
