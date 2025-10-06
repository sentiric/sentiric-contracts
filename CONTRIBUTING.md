# 🤝 Katkı Rehberi – Sentiric Contracts

Bu belge, `sentiric-contracts` deposuna katkı yapmak isteyen ekip üyeleri için rehber niteliğindedir. Protobuf tanımlarını nasıl güncelleyeceğiniz, kod üretimini nasıl tetikleyeceğiniz ve yeni bir sürümü nasıl yayınlayacağınız gibi konuları içerir.

---

## 🧱 Geliştirme Adımları

### 1. `.proto` Dosyasını Güncelle

Tüm tanımlar `proto/` klasöründe, Kategori/Servis bazlı hiyerarşide yer alır. Yeni bir servis, mesaj veya alan eklemeden önce lütfen [Protobuf Standartları Kılavuzunu](docs/protobuf-standards.md) inceleyin.

```bash
cd proto
# Değişiklik yap
````

---

### 2. Kalite Kontrol ve Kod Üretimi

Değişiklik yaptıktan sonra, dil özgü kodları otomatik olarak üretmek ve Buf lint kurallarına uyduğunuzdan emin olmak için aşağıdaki komutları çalıştırın:

```bash
cargo clean

# Lint kurallarını kontrol et (adlandırma, paket yolları vb.)
buf lint
buf dep update

# Dile özgü kodları (Go, Rust, Node.js, Python) üret
buf generate

# Go bağımlılıklarını senkronize et
go mod tidy

# Rust build'ini doğrula
cargo build

```

---

### 3. Commit Kuralları

Lütfen commit mesajlarını [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standardına uygun yazın.

#### Örnekler

```bash
# Yeni bir API veya önemli bir model eklendi
git commit -m "feat(telephony): Add StartRecording and StopRecording RPCs"

# Sadece CI fix'i
git commit -m "chore(ci): Fix release workflow"

# Lint kuralı veya isimlendirme düzeltildi
git commit -m "fix(standards): Correct RPC naming in vertical services"
```

---

## 🏷️ Sürümleme ve Yayınlama

Yeni bir sürüm yayınlamak için Git etiketi (`tag`) oluşturmanız yeterlidir. CI/CD otomatik olarak paketleri yayınlayacaktır.

### Yeni Sürüm Yayınlama

```bash
git commit -m "feat(api): Add new services for v1.9.0"
git push origin main

git tag v1.9.0
git push origin v1.9.0
```

> 🎯 Semantic Versioning (semver) kullanıyoruz: `MAJOR.MINOR.PATCH`. MAJOR değişiklikler geriye dönük uyumsuzluk (breaking change) yaratır.

---

## 🔍 Kod Tarzı ve Kalite

*   Buf, tüm `.proto` dosyalarını lint eder. **(BPF kuralı uygulanmalıdır)**
*   CI, kırıcı değişiklikleri tespit eder.
*   **Adlandırma Standardı:** RPC'ye özgü istek/yanıt mesajı (`RPCNameRequest`, `RPCNameResponse`) kullanılmalıdır.
*   Kullanımdan kaldırılan RPC'ler için Protobuf `deprecated = true` niteliği kullanılmalıdır.

---

Teşekkürler! 🙌