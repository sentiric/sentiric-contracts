// Dosya Yolu: validation/cpp/main.cpp
#include "sentiric/llm/v1/llama.pb.h"
#include <iostream>

int main() {
    // DÜZELTME: Nihai, CI uyumlu mesaj adı kullanılıyor.
    sentiric::llm::v1::GenerateStreamRequest req;
    
    req.set_user_prompt("Hello, C++ validation!");
    
    std::cout << "SUCCESS: C++ protobuf message created with user_prompt: " << req.user_prompt() << std::endl;
    return 0;
}