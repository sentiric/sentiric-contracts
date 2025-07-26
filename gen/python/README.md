# Sentiric Contracts (Python)

This package contains the auto-generated gRPC client/server stubs for the Sentiric platform's microservices.

## Installation

```bash
pip install sentiric-contracts
```

## Usage
```python
from gen.python.sentiric.user.v1 import user_pb2, user_pb2_grpc

# Example usage
request = user_pb2.GetUserRequest(id="user-123")
```