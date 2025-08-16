# 🤝 Katkı Rehberi – Sentiric Contracts

Bu belge, `sentiric-contracts` deposuna katkı yapmak isteyen ekip üyeleri için rehber niteliğindedir. Protobuf tanımlarını nasıl güncelleyeceğiniz, kod üretimini nasıl tetikleyeceğiniz ve yeni bir sürümü nasıl yayınlayacağınız gibi konuları içerir.

---

## 🧱 Geliştirme Adımları

### 1. `.proto` Dosyasını Güncelle

Tüm tanımlar `proto/` klasöründe yer alır. Yeni bir servis, mesaj veya alan eklemeden önce lütfen mevcut yapıyı ve isimlendirme kurallarını inceleyin.

```bash
cd proto
# Değişiklik yap
````

---

### 2. Kod Üretimi (`buf generate`)

Değişiklik yaptıktan sonra, dile özgü kodları otomatik olarak üretmek için aşağıdaki komutu çalıştır:

```bash
buf generate
```

Buf, `buf.gen.yaml` dosyasını kullanarak `gen/` dizinine gerekli çıktıları üretir.

> 💡 `go mod tidy` çalıştırmak gerekebilir (özellikle Go için).

---

### 3. Commit Kuralları

Lütfen commit mesajlarını [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standardına uygun yazın.

#### Örnekler

```bash
# Yeni bir model eklendi
git commit -m "feat(data-model): Add UserProfile message"

# Sadece CI fix'i
git commit -m "chore(ci): Fix release workflow"

# Build iyileştirildi
git commit -m "fix(build): Improve buf export path"
```

---

## 🏷️ Sürümleme ve Yayınlama

Yeni bir sürüm yayınlamak için Git etiketi (`tag`) oluşturmanız yeterlidir. CI/CD otomatik olarak paketleri yayınlayacaktır.

### Yeni Sürüm Yayınlama

```bash
git commit -m "feat(api): Add new payment method"
git push origin main

git tag v1.7.0
git push origin v1.7.0
```

> 🎯 Semantic Versioning (semver) kullanıyoruz: `MAJOR.MINOR.PATCH`

---

### Fix Sonrası Tekrar Yayınlama

CI başarısız olduysa ya da tekrar yayınlamak istiyorsanız:

```bash
# Hatalı tag'i sil
git tag -d v1.6.2
git push --delete origin v1.6.2

# Yeni commit yap (CI fix gibi)
git commit -m "chore(release): Increment version to 1.6.3 after CI fix"
git push origin main

# Yeni tag oluştur
git tag v1.6.3
git push origin v1.6.3
```

---

## 🔍 Kod Tarzı ve Kalite

* Buf, tüm `.proto` dosyalarını lint eder.
* CI, kırıcı değişiklikleri tespit eder.
* Dosya isimleri `snake_case`, mesajlar `PascalCase`, alanlar `snake_case` olmalıdır.
* Gereksiz bağımlılıklar silinmeli (`go mod tidy` gibi).

---

## 🧪 CI & Pipeline'lar

* Her commit → Lint & breaking change kontrolü
* Her tag → Dil özelinde paketlerin yayınlanması (Go, Rust, Python, TypeScript)

---

## 📬 İletişim

Katkılar veya sorular için ilgili mimari temsilciye ya da [Sentiric Governance](https://github.com/sentiric/sentiric-governance) rehberine başvurabilirsiniz.

---

Teşekkürler! 🙌

```