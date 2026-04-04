# 🧬 Contract Governance & Schema Evolution

Bu belge, Sentiric ekosistemindeki veri değişim formatlarının nasıl evrimleştiğini ve korunduğunu açıklar.

## 1. Single Source of Truth (SSoT)
Tüm servisler (Rust, Go, C++, TS) kendi içlerinde veri yapısı tanımlayamaz. Bir veri tipi birden fazla servis tarafından kullanılıyorsa, o tip mutlaka bu repoda (Contracts) tanımlanmalıdır.

## 2. Breaking Change Policy (Kırılma Koruması)
Sistem canlıyken bir sözleşmeyi değiştirmek "kalp ameliyatı" gibidir.
* **Yasak:** Mevcut bir alanın tipini değiştirmek veya alanı silmek.
* **Serbest:** Yeni `optional` alan eklemek, yeni `rpc` metodu eklemek.
* **Zorunluluk:** Eğer bir yapı tamamen değişecekse `v2` klasörü açılmalı ve `v1` bir süre paralel yaşatılmalıdır.

## 3. Otomasyon (CI/CD)
Bu repoya yapılan her Push; `buf generate` komutu ile tüm diller için (Rust, Go, TS, Python) stub dosyalarını otomatik üretir ve ilgili paket depolarına (NPM, Cargo) hazır hale getirir.
