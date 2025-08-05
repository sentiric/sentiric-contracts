module github.com/sentiric/sentiric-contracts

go 1.21

require (
	google.golang.org/genproto/googleapis/api v0.0.0-20240318140521-94a12d6c2237
	google.golang.org/grpc v1.64.0
	google.golang.org/protobuf v1.34.1
)

// Bu dolaylı bağımlılıkları 'go mod tidy' kendi ekleyebilir
require (
	golang.org/x/net v0.22.0 // indirect
	golang.org/x/sys v0.18.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240318140521-94a12d6c2237 // indirect
)
