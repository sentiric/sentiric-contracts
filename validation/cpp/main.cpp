// Dosya Yolu: validation/cpp/main.cpp
#include "sentiric/llm/v1/local.pb.h"
#include <iostream>

int main() {
    sentiric::llm::v1::LocalGenerateRequest req;
    req.set_prompt("Hello, C++ validation!");
    std::cout << "SUCCESS: C++ protobuf message created with prompt: " << req.prompt() << std::endl;
    return 0;
}