# 🏛️ Sentiric Contracts (The DNA)

**Sentiric Contracts**, platformun tüm gRPC ve Protobuf tanımlarının **Tek Doğruluk Kaynağıdır (SSoT)**. 

## 📦 Kullanım (Bağımlılık Olarak Ekleme)

### Rust (Cargo.toml)
```toml
sentiric-contracts = { git = "https://github.com/sentiric/sentiric-contracts.git", tag = "v1.20.5" }
```

### TypeScript (package.json)
```json
"@sentiric/contracts": "git+https://github.com/sentiric/sentiric-contracts.git#v1.20.5"
```

### Go (go.mod)
```go
require github.com/sentiric/sentiric-contracts v1.20.5
```

## 🛠️ Geliştirme Kılavuzu
* **Sözleşme Yazım Kuralları (AI/İnsan):** Yeni bir .proto dosyası eklemeden önce GİZLİ [.context.md](.context.md) dosyasını okuyun.
* **Sürümleme ve Yönetişim:** Sözleşme yaşam döngüsü kuralları için [LOGIC.md](LOGIC.md) dosyasını inceleyin.
EOF