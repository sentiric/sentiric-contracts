# 🏷️ Sentiric Contracts - Görev Listesi

---

### **FAZ 2: Asenkron İletişim Standardizasyonu**

-   [ ] **Görev ID: CT-001 - Standart Olay (Event) Mesajları Tanımlama**
    -   **Açıklama:** Servisler arasında RabbitMQ üzerinden taşınacak olaylar için merkezi ve standart Protobuf tanımları oluştur.
    -   **Durum:** ⬜ **Planlandı**
    -   **Kabul Kriterleri:**
        -   [ ] `proto/sentiric/event/v1/event.proto` adında yeni bir dosya oluşturulmalı.
        -   [ ] Bu dosya, `CallStartedEvent` ve `CallEndedEvent` mesajlarını içermeli.
        -   [ ] `CallStartedEvent`, `dialplan-service`'ten gelen `DialplanAction` bilgisini taşıyabilmeli.
        -   [ ] `build.rs` ve `src/lib.rs` dosyaları yeni `.proto` dosyasını derleyecek ve modüle dahil edecek şekilde güncellenmeli.
        -   [ ] Yeni kontratlar `v1.8.4` olarak etiketlenip yayınlanmalı.