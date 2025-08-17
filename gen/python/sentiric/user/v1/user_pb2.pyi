from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Contact(_message.Message):
    __slots__ = ("id", "user_id", "contact_type", "contact_value", "is_primary")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    CONTACT_TYPE_FIELD_NUMBER: _ClassVar[int]
    CONTACT_VALUE_FIELD_NUMBER: _ClassVar[int]
    IS_PRIMARY_FIELD_NUMBER: _ClassVar[int]
    id: int
    user_id: str
    contact_type: str
    contact_value: str
    is_primary: bool
    def __init__(self, id: _Optional[int] = ..., user_id: _Optional[str] = ..., contact_type: _Optional[str] = ..., contact_value: _Optional[str] = ..., is_primary: _Optional[bool] = ...) -> None: ...

class User(_message.Message):
    __slots__ = ("id", "name", "tenant_id", "user_type", "contacts", "preferred_language_code")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    CONTACTS_FIELD_NUMBER: _ClassVar[int]
    PREFERRED_LANGUAGE_CODE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    tenant_id: str
    user_type: str
    contacts: _containers.RepeatedCompositeFieldContainer[Contact]
    preferred_language_code: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., tenant_id: _Optional[str] = ..., user_type: _Optional[str] = ..., contacts: _Optional[_Iterable[_Union[Contact, _Mapping]]] = ..., preferred_language_code: _Optional[str] = ...) -> None: ...

class GetUserRequest(_message.Message):
    __slots__ = ("user_id",)
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    def __init__(self, user_id: _Optional[str] = ...) -> None: ...

class GetUserResponse(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class FindUserByContactRequest(_message.Message):
    __slots__ = ("contact_type", "contact_value")
    CONTACT_TYPE_FIELD_NUMBER: _ClassVar[int]
    CONTACT_VALUE_FIELD_NUMBER: _ClassVar[int]
    contact_type: str
    contact_value: str
    def __init__(self, contact_type: _Optional[str] = ..., contact_value: _Optional[str] = ...) -> None: ...

class FindUserByContactResponse(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class CreateUserRequest(_message.Message):
    __slots__ = ("tenant_id", "user_type", "name", "initial_contact", "preferred_language_code")
    class InitialContact(_message.Message):
        __slots__ = ("contact_type", "contact_value")
        CONTACT_TYPE_FIELD_NUMBER: _ClassVar[int]
        CONTACT_VALUE_FIELD_NUMBER: _ClassVar[int]
        contact_type: str
        contact_value: str
        def __init__(self, contact_type: _Optional[str] = ..., contact_value: _Optional[str] = ...) -> None: ...
    TENANT_ID_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    INITIAL_CONTACT_FIELD_NUMBER: _ClassVar[int]
    PREFERRED_LANGUAGE_CODE_FIELD_NUMBER: _ClassVar[int]
    tenant_id: str
    user_type: str
    name: str
    initial_contact: CreateUserRequest.InitialContact
    preferred_language_code: str
    def __init__(self, tenant_id: _Optional[str] = ..., user_type: _Optional[str] = ..., name: _Optional[str] = ..., initial_contact: _Optional[_Union[CreateUserRequest.InitialContact, _Mapping]] = ..., preferred_language_code: _Optional[str] = ...) -> None: ...

class CreateUserResponse(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...
