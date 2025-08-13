from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class SynthesizeRequest(_message.Message):
    __slots__ = ("text", "language_code", "speaker_wav_url", "voice_selector")
    TEXT_FIELD_NUMBER: _ClassVar[int]
    LANGUAGE_CODE_FIELD_NUMBER: _ClassVar[int]
    SPEAKER_WAV_URL_FIELD_NUMBER: _ClassVar[int]
    VOICE_SELECTOR_FIELD_NUMBER: _ClassVar[int]
    text: str
    language_code: str
    speaker_wav_url: str
    voice_selector: str
    def __init__(self, text: _Optional[str] = ..., language_code: _Optional[str] = ..., speaker_wav_url: _Optional[str] = ..., voice_selector: _Optional[str] = ...) -> None: ...

class SynthesizeResponse(_message.Message):
    __slots__ = ("audio_content", "engine_used")
    AUDIO_CONTENT_FIELD_NUMBER: _ClassVar[int]
    ENGINE_USED_FIELD_NUMBER: _ClassVar[int]
    audio_content: bytes
    engine_used: str
    def __init__(self, audio_content: _Optional[bytes] = ..., engine_used: _Optional[str] = ...) -> None: ...
