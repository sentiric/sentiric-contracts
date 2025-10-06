# 🏛️ Sentiric Contracts

[![CI Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml)
[![Release Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml)

Bu depo, Sentiric mikroservis ekosistemindeki tüm API sözleşmelerinin ve **Protobuf** tanımlarının **Tek Doğruluk Kaynağıdır (Single Source of Truth)**. [Buf](https://buf.build) kullanarak, çoklu diller (Go, Rust, Python, TypeScript) için tip-güvenli istemci/sunucu kodlarını yönetir, lint'ler ve otomatik olarak üretir.

## 🎯 Temel Sorumluluklar

*   **Tutarlılık:** Tüm servislerin aynı dili konuşmasını sağlar.
*   **Tip Güvenliği:** Çalışma zamanı hatalarının büyük bir bölümünü ortadan kaldırır.
*   **Otomasyon:** CI/CD, her dil için sürüm kontrollü paketleri otomatik olarak üretir ve yayınlar.
*   **Standartlar:** Tüm RPC ve Veri Modeli adlandırma (BPF kuralı) standartlarını zorunlu kılar.

## 📂 Dizin Yapısı

*   `/proto`: Tüm `.proto` dosyalarının bulunduğu ana dizin. (Kategori 1'den 7'ye ayrılmıştır.)
*   `/gen`: `buf` tarafından otomatik olarak üretilen, dile özgü kodların bulunduğu dizin.
*   `buf.yaml`: Proje bağımlılıklarını ve lint kurallarını tanımlar.
*   `buf.gen.yaml`: Hangi diller için kod üretileceğini ve çıktı yollarını tanımlar.

## 🚀 Kullanım

Yeni bir sürüm etiketlendiğinde (örn: `v1.9.0`), release pipeline'ı paketleri otomatik olarak yayınlar. Diğer servisler bu paketleri bağımlılık olarak kullanmalıdır.

### Go
`go.mod` dosyanıza ekleyin:
```go
require (
    github.com/sentiric/sentiric-contracts v1.9.0
)
```

### Rust
`Cargo.toml` dosyanıza ekleyin:
```toml
[dependencies]
sentiric-contracts = "1.9.0" 
```

## 💻 Geliştirme Akışı

1.  `/proto` altındaki bir `.proto` dosyasını değiştirin.
2.  Yerel kalite kontrolü yapın: `buf lint`
3.  Kodları üretin: `buf generate`
4.  Yeni paket versiyonları yayınlamak için yeni bir Git etiketi oluşturun (örn: `git tag v1.9.0` ve `git push origin v1.9.0`).

---

## 📘 STANDARTLAR VE MİMARİ REHBERLER

*   Tüm adlandırma ve sürümleme kuralları için **[Protobuf Standartları Kılavuzuna](docs/protobuf-standards.md)** bakın.
*   Bu servis, [Sentiric Anayasası'nın (v13.1)](https://github.com/sentiric/sentiric-governance/blob/main/docs/blueprint/Architecture-Overview.md) gerektirdiği tüm kontratları içerir.

---

