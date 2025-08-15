from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class AllocatePortRequest(_message.Message):
    __slots__ = ("call_id",)
    CALL_ID_FIELD_NUMBER: _ClassVar[int]
    call_id: str
    def __init__(self, call_id: _Optional[str] = ...) -> None: ...

class AllocatePortResponse(_message.Message):
    __slots__ = ("rtp_port",)
    RTP_PORT_FIELD_NUMBER: _ClassVar[int]
    rtp_port: int
    def __init__(self, rtp_port: _Optional[int] = ...) -> None: ...

class ReleasePortRequest(_message.Message):
    __slots__ = ("rtp_port",)
    RTP_PORT_FIELD_NUMBER: _ClassVar[int]
    rtp_port: int
    def __init__(self, rtp_port: _Optional[int] = ...) -> None: ...

class ReleasePortResponse(_message.Message):
    __slots__ = ("success",)
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class PlayAudioRequest(_message.Message):
    __slots__ = ("rtp_target_addr", "server_rtp_port", "audio_uri")
    RTP_TARGET_ADDR_FIELD_NUMBER: _ClassVar[int]
    SERVER_RTP_PORT_FIELD_NUMBER: _ClassVar[int]
    AUDIO_URI_FIELD_NUMBER: _ClassVar[int]
    rtp_target_addr: str
    server_rtp_port: int
    audio_uri: str
    def __init__(self, rtp_target_addr: _Optional[str] = ..., server_rtp_port: _Optional[int] = ..., audio_uri: _Optional[str] = ...) -> None: ...

class PlayAudioResponse(_message.Message):
    __slots__ = ("success", "message")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    def __init__(self, success: bool = ..., message: _Optional[str] = ...) -> None: ...
