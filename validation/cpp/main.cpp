// Dosya Yolu: validation/cpp/main.cpp
#include "sentiric/llm/v1/local.pb.h"
#include <iostream>

int main() {
    // DÜZELTME: Artık var olmayan 'LocalGenerateRequest' yerine,
    // yeni ve doğru mesaj olan 'LocalGenerateStreamRequest' kullanılıyor.
    sentiric::llm::v1::LocalGenerateStreamRequest req;
    
    // Geri kalan kod, bu mesajın alanlarıyla uyumlu olacak şekilde güncellendi.
    req.set_user_prompt("Hello, C++ validation!");
    
    std::cout << "SUCCESS: C++ protobuf message created with user_prompt: " << req.user_prompt() << std::endl;
    return 0;
}