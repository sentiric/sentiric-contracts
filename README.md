# 🏛️ Sentiric Contracts

[![CI Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml)
[![Release Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml)

This repository is the **Single Source of Truth** for all API contracts and Protobuf definitions across the entire Sentiric microservice ecosystem. It uses [Buf](https://buf.build) to manage, lint, and generate type-safe client/server code for multiple languages.

## Overview

By centralizing our API definitions here, we ensure:
- **Consistency:** All services speak the same language.
- **Type Safety:** Eliminates entire classes of runtime errors.
- **Automation:** CI/CD automatically generates and publishes versioned packages for each language.
- **Parallel Development:** Teams can develop services independently against a stable, shared contract.

## Usage in Other Services

When a new version is tagged (e.g., `v0.2.0`), the release pipeline automatically publishes packages. Other Sentiric services should consume these packages as dependencies.

###  Go
Add the dependency to your `go.mod` file:
```bash
go get github.com/sentiric/sentiric-contracts@v0.1.9
```
Then import it in your code:
```go
import (
    userv1 "github.com/sentiric/sentiric-contracts/gen/go/sentiric/user/v1"
)

func main() {
    // ...
    req := &userv1.GetUserRequest{Id: "user-123"}
    // ...
}
```

### Node.js / TypeScript
Install the package from the GitHub Packages registry:
```bash
npm install @sentiric/contracts@latest
```
Usage in your code:
```javascript
const { GetUserRequest } = require('@sentiric/contracts/gen/nodejs/sentiric/user/v1/user_pb');

const req = new GetUserRequest();
req.setId('user-123');
```

### Python
Install the package from PyPI or GitHub Packages:
```bash
pip install sentiric-contracts
```
Usage in your code:
```python
from gen.python.sentiric.user.v1 import user_pb2, user_pb2_grpc

request = user_pb2.GetUserRequest(id="user-123")
```

## Development Workflow

1.  **Modify a `.proto` file:** Make your changes inside the `proto/` directory.
2.  **Generate code locally (optional):** Run `buf generate` to see the results.
3.  **Commit and Push:** The `CI` workflow will lint and check for breaking changes.
4.  **Tag a new release:** To publish new package versions, create a new Git tag (e.g., `git tag v0.2.0` and `git push origin v0.2.0`). The `Release` workflow will handle the rest.

---
```bash
# 1. sentiric-contracts ana dizininde olduğundan emin ol
C:\sentiric\sentiric-contracts>

# 2. proto dizinine gir
C:\sentiric\sentiric-contracts> cd proto

# 3. Şimdi, sadece generate komutunu çalıştır.
# Buf, konfigürasyon dosyalarını (buf.yaml, buf.gen.yaml)
# mevcut dizinde bulacak ve yine mevcut dizindeki .proto dosyalarını işleyecektir.
C:\sentiric\sentiric-contracts\proto> buf generate

go mod tidy

```

feature
```bash
git commit -m "feat(data-model): "
git push origin main
git tag v1.5.0
git push origin v1.5.0
```

fix
```bash
git add .
git commit -m "fix(contracts): xxx"
git tag -d v1.5.0
git push --delete origin v1.5.0
git tag v1.5.0
git push origin v1.5.0
```

release
```bash
git add .
git commit -m "chore(release): Increment version to 1.5.1 for republishing after CI fix"
git push origin main
git tag v1.5.1
git push origin v1.5.1
```