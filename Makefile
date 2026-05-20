# Makefile for sentiric-contracts

.PHONY: all generate-all generate-cpp lint tidy build-rust validate-py validate-cpp clean

all: generate-all validate

generate-all:
	@echo "--- Generating stubs for all languages with buf... ---"
	buf generate
	@echo "--- Generating stubs for C++ with system protoc... ---"
	make generate-cpp

generate-cpp:
	@rm -rf gen/cpp
	@mkdir -p gen/cpp
	@mkdir -p vendor_proto/google/api
	@curl -sSL https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto -o vendor_proto/google/api/annotations.proto
	@curl -sSL https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto -o vendor_proto/google/api/http.proto
	@echo "--- Generating Google API C++ stubs ---"
	protoc --proto_path=vendor_proto \
		--cpp_out=gen/cpp \
		vendor_proto/google/api/annotations.proto \
		vendor_proto/google/api/http.proto
	@echo "--- Generating Sentiric C++ stubs ---"
	find proto -name "*.proto" -exec protoc \
		--proto_path=proto \
		--proto_path=vendor_proto \
		--cpp_out=gen/cpp \
		--grpc_out=gen/cpp \
		--plugin=protoc-gen-grpc=`which grpc_cpp_plugin` \
		{} +

lint:
	buf lint

tidy:
	go mod tidy

build-rust:
	cargo build

validate-py:
	@echo "--- Validating Python package... ---"
	@rm -rf .venv dist build *.egg-info
	python3 -m venv .venv
	@. .venv/bin/activate && \
		pip install -q build wheel && \
		python3 -m build && \
		pip install -q dist/*.whl && \
		python3 -c "from sentiric.llm.v1 import llama_pb2; from sentiric.tts.v1 import gateway_pb2; from sentiric.tts.v1 import coqui_pb2; print('✅ Python imports OK (Llama, Gateway, Coqui)')"

validate-cpp:
	@echo "--- Validating C++ build... ---"
	@rm -rf validation/cpp/build
	@mkdir -p validation/cpp/build
	@cd validation/cpp/build && cmake .. && make && ./validator
	@echo "C++ build OK"

validate: tidy build-rust validate-py validate-cpp

clean:
	rm -rf gen/
	rm -rf validation/cpp/build
	rm -rf .venv dist build *.egg-info
	cargo clean