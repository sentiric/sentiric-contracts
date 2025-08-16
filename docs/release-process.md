# 🚀 Sürüm Yayınlama Rehberi – Sentiric Contracts

Bu belge, `sentiric-contracts` projesinde sürüm oluşturma, etiketleme (tagging), tekrar yayınlama (re-publishing) ve CI/CD sürecinin nasıl çalıştığını açıklamak için hazırlanmıştır.

---

## 🧭 Sürümleme Stratejisi

Proje, [SemVer](https://semver.org/) (Semantic Versioning) sistemine uyar:

```semver

vMAJOR.MINOR.PATCH

```

| Tür   | Açıklama                                                                 |
|-------|--------------------------------------------------------------------------|
| MAJOR | Geriye dönük uyumsuz değişiklikler. (örn: mesaj veya alan silme)         |
| MINOR | Yeni mesajlar, alanlar veya servisler (geriye dönük uyumlu).            |
| PATCH | Hata düzeltmeleri, build/CI iyileştirmeleri (kodu değiştirmeden).       |

---

## 🏷️ Yayınlama Adımları

1. Gerekli `.proto` değişikliklerini yap.
2. `buf generate` ile kodları üret.
3. Commit'le, push et.
4. Yeni bir versiyon etiketi (tag) oluştur.

### Örnek Yayın

```bash
git add .
git commit -m "feat(user): Add UserSettings message"
git push origin main

git tag v1.7.0
git push origin v1.7.0
````

### Ne Olur?

* CI otomatik olarak çalışır.
* `.proto` dosyaları lint edilir ve kırıcı değişiklikler kontrol edilir.
* `gen/` içeriği kontrol edilir.
* Go, Rust, Python, TypeScript için çıktılar hazırlanır ve ilgili paketler publish edilir.

---

## 🛠️ Tekrar Yayınlama (Re-Publishing)

Bazı durumlarda aynı sürüm tekrar yayınlanabilir (örneğin CI düzeltmesi sonrası). Aşağıdaki adımları uygula:

### 1. Hatalı Tag'i Sil

```bash
git tag -d v1.6.2
git push --delete origin v1.6.2
```

### 2. Gerekirse Ek Commit Yap

```bash
git add .
git commit -m "chore(release): Republish v1.6.2 after CI fix"
git push origin main
```

### 3. Aynı Tag'i Yeniden Oluştur

```bash
git tag v1.6.2
git push origin v1.6.2
```

> 🔁 CI tekrar tetiklenecek ve sürüm yeniden yayınlanacaktır.

---

## 📦 Yayınlanan Paketler

Her sürümle birlikte aşağıdaki platformlara otomatik olarak paketler gönderilir:

| Dil        | Yayın Yeri                     |
| ---------- | ------------------------------ |
| Go         | Go Modules (`go.mod` ile)      |
| Rust       | Git bağımlılığı (`Cargo.toml`) |
| Python     | PyPI veya GitHub Packages      |
| TypeScript | GitHub Packages (`npm`)        |

---

## 🔒 Notlar

* Her sürüm, **tek bir source of truth** olan `proto/` klasöründen türetilmelidir.
* `gen/` dizini **manuel düzenlenmemelidir**.
* Yayınlanan paketler read-only olmalıdır; değiştirilmesi gerekiyorsa yeni bir sürüm çıkarılmalıdır.

---

## 📚 Ek Kaynaklar

* [Buf Docs](https://docs.buf.build)
* [Semantic Versioning](https://semver.org/)
* [Conventional Commits](https://www.conventionalcommits.org/)
* [Sentiric Anayasası](https://github.com/sentiric/sentiric-governance/blob/main/docs/blueprint/Architecture-Overview.md)

---

Teşekkürler! Her sürüm, Sentiric sisteminin daha sağlam ve uyumlu çalışmasına katkı sağlar.

```