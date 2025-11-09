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
	find proto -name "*.proto" -exec protoc \
		--proto_path=proto \
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
	@# DÜZELTME 1: Önceki denemelerden kalan artıkları temizle
	@rm -rf .venv dist build *.egg-info
	python3 -m venv .venv
	@. .venv/bin/activate && \
		pip install -q build wheel && \
		python3 -m build && \
		pip install -q dist/*.whl && \
		python3 -c "from sentiric.llm.v1 import local_pb2; print('Python import OK')"
	@# DÜZELTME 2: 'deactivate' komutu kaldırıldı ve temizlik komutu 'clean-py' hedefine taşındı.

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