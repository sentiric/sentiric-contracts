# Dosya Yolu: validation/cpp/CMakeLists.txt (NİHAİ - PKG-CONFIG İLE)

cmake_minimum_required(VERSION 3.14)
project(CppValidation)

# Sistemdeki paketleri bulmak için pkg-config kullanmak en sağlam yoldur.
find_package(PkgConfig REQUIRED)
pkg_search_module(PROTOBUF REQUIRED protobuf)
pkg_search_module(GRPC REQUIRED grpc++)

# Kendi ürettiğimiz kaynak (.cc) dosyalarını buluyoruz.
file(GLOB_RECURSE CONTRACT_SOURCES
    "${CMAKE_CURRENT_SOURCE_DIR}/../../gen/cpp/*.cc"
)

# Çalıştırılabilir dosyayı oluşturuyoruz.
add_executable(validator main.cpp ${CONTRACT_SOURCES})

# Derleyiciye başlık (.h) dosyalarının yollarını söylüyoruz.
# pkg-config bu değişkenleri (örn: PROTOBUF_INCLUDE_DIRS) doldurur.
target_include_directories(validator PRIVATE
    ${PROTOBUF_INCLUDE_DIRS}
    ${GRPC_INCLUDE_DIRS}
    "${CMAKE_CURRENT_SOURCE_DIR}/../../gen/cpp"
)

# Kütüphaneleri bağlıyoruz.
# pkg-config bu değişkenleri (örn: PROTOBUF_LIBRARIES) tüm bağımlılıklarıyla
# (hem -L hem -l flag'leri) birlikte doldurur.
target_link_libraries(validator PRIVATE
    ${PROTOBUF_LIBRARIES}
    ${GRPC_LIBRARIES}
)