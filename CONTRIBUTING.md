# 🤝 Katkı Rehberi – Sentiric Contracts

Bu belge, `sentiric-contracts` deposuna katkı yapmak isteyen ekip üyeleri için rehber niteliğindedir.

---

## 🧱 Geliştirme Akışı

Tüm geliştirme, doğrulama ve temizleme işlemleri `Makefile` üzerinden standartlaştırılmıştır.

### 1. Ortam Kurulumu

Geliştirmeye başlamadan önce, sisteminizde aşağıdaki araçların kurulu olduğundan emin olun.

#### Genel Araçlar
- **Buf CLI:** [Resmi Kurulum Kılavuzu](https://docs.buf.build/installation)'nu takip edin.
- **Go:** Sürüm 1.21+
- **Rust (cargo):** Sürüm 1.70+
- **Python:** Sürüm 3.8+ ve `venv` modülü
- **Node.js:** Sürüm 20+
- **make**

#### C++ Bağımlılıkları (Debian/Ubuntu)
C++ kodlarını yerel olarak üretip derleyebilmek için aşağıdaki paketler gereklidir:

```bash
sudo apt-get update
sudo apt-get install -y build-essential cmake libprotobuf-dev protobuf-compiler libgrpc++-dev protobuf-compiler-grpc libabsl-dev
```

### 2. `.proto` Dosyasını Güncelle

Tüm tanımlar `proto/` klasöründe yer alır. Değişiklik yapmadan önce lütfen [Protobuf Standartları Kılavuzunu](docs/protobuf-standards.md) inceleyin.

### 3. Kalite Kontrol ve Kod Üretimi

Değişiklik yaptıktan sonra, tüm dillere ait kodları üretmek ve kalite kontrollerini yapmak için aşağıdaki `make` komutlarını kullanın.

```bash
# Sadece lint kurallarını kontrol et
make lint

# Tüm diller için kodları yeniden üret (Buf + C++ protoc)
make generate-all

# Tüm diller için tam doğrulama sürecini çalıştır (go, rust, py, cpp)
make validate
```
`make validate` komutu, commit atmadan önce çalıştırılması gereken son adımdır. Bu komut Go, Rust, Python ve C++ için derleme ve testleri çalıştırarak her şeyin yolunda olduğunu garanti eder.

### 4. Commit Kuralları

Lütfen commit mesajlarını [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standardına uygun yazın.

#### Örnekler

```bash
# Yeni bir API eklendi
git commit -m "feat(telephony): Add StartRecording RPC"

# Sadece CI düzeltmesi
git commit -m "chore(ci): Fix C++ validation step"
```

---

## 🏷️ Sürümleme ve Yayınlama

Yeni bir sürüm yayınlamak için Git etiketi (`tag`) oluşturmanız yeterlidir. CI/CD otomatik olarak paketleri yayınlayacaktır.

```bash
# Değişiklikleri main'e gönderin
git commit -m "feat(api): Add new services for v1.12.1"
git push origin main

# Yeni bir tag oluşturun ve gönderin
git tag v1.12.1
git push origin v1.12.1
```
> 🎯 **Semantic Versioning (semver)** kullanıyoruz: `MAJOR.MINOR.PATCH`. MAJOR değişiklikler geriye dönük uyumsuzluk yaratır.

---
Teşekkürler! 🙌