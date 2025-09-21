# 🏛️ Sentiric Contracts

[![CI Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/ci.yml)
[![Release Status](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml/badge.svg)](https://github.com/sentiric/sentiric-contracts/actions/workflows/release.yml)

Bu repo, Sentiric mikroservis ekosistemindeki tüm API sözleşmelerinin ve **Protobuf** tanımlarının **Tek Doğruluk Kaynağıdır (Single Source of Truth)**. [Buf](https://buf.build) kullanarak, çoklu diller (Go, Rust, Python, TypeScript) için tip-güvenli istemci/sunucu kodlarını yönetir, lint'ler ve otomatik olarak üretir.

## 🎯 Temel Sorumluluklar

*   **Tutarlılık:** Tüm servislerin aynı dili konuşmasını sağlar.
*   **Tip Güvenliği:** Çalışma zamanı hatalarının büyük bir bölümünü ortadan kaldırır.
*   **Otomasyon:** CI/CD, her dil için sürüm kontrollü paketleri otomatik olarak üretir ve yayınlar.
*   **Paralel Geliştirme:** Ekipler, stabil ve paylaşılan bir sözleşmeye karşı bağımsız olarak servis geliştirebilir.

## 📂 Dizin Yapısı

*   `/proto`: Tüm `.proto` dosyalarının bulunduğu ana dizin.
*   `/gen`: `buf` tarafından otomatik olarak üretilen, dile özgü kodların bulunduğu dizin.
*   `buf.yaml`: Proje bağımlılıklarını ve lint kurallarını tanımlar.
*   `buf.gen.yaml`: Hangi diller için kod üretileceğini ve çıktı yollarını tanımlar.

## 🚀 Kullanım

Yeni bir sürüm etiketlendiğinde (örn: `v1.8.11`), release pipeline'ı paketleri otomatik olarak yayınlar. Diğer servisler bu paketleri bağımlılık olarak kullanmalıdır.

### Go
`go.mod` dosyanıza ekleyin:
```go
require (
    github.com/sentiric/sentiric-contracts v1.8.11
)
```

### Rust
`Cargo.toml` dosyanıza ekleyin:
```toml
[dependencies.sentiric-contracts]
git = "https://github.com/sentiric/sentiric-contracts.git"
tag = "v1.8.11"
```

## 💻 Geliştirme Akışı

```bash
del Cargo.lock
cargo clean
buf lint
buf generate
go mod tidy
cargo build --release


```

1.  `/proto` altındaki bir `.proto` dosyasını değiştirin.
2.  Değişikliklerinizi commit'leyip push'layın. CI, lint ve kırıcı değişiklik kontrolü yapacaktır.
3.  Yeni paket versiyonları yayınlamak için yeni bir Git etiketi oluşturun (örn: `git tag v1.8.11` ve `git push origin v1.8.11`). Release pipeline'ı gerisini halleder.

---

---
```bash
# 1. Yereldeki etiketi sil
git tag -d v1.8.11

# 2. GitHub'daki etiketi sil
git push --delete origin v1.8.11
```

```bash
dir /s /b | findstr /v "\\.git\\"
```

---
## 🏛️ Anayasal Konum

Bu servis, [Sentiric Anayasası'nın (v11.0)](https://github.com/sentiric/sentiric-governance/blob/main/docs/blueprint/Architecture-Overview.md) **Zeka & Orkestrasyon Katmanı**'nda yer alan merkezi bir bileşendir.