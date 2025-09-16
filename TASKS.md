# 🏷️ Sentiric Contracts - Görev Listesi (v1.8.9) Bundan sonraki versiyonlar 1.8.xx olarak devam edecek

Bu belge, `sentiric-contracts` deposuna yapılan ve planlanan değişiklikleri listeler.

---

### **FAZ 1: Uçtan Uca Veri Bütünlüğü (Mevcut Odak)**

**Amaç:** Platformdaki en kritik veri akışı kopukluğunu gidermek ve `agent-service`'in çağrıyı yapan kullanıcıyı tanımasını sağlamak.

-   **Görev ID: CT-FIX-01 - `CallStartedEvent` Mesajını `dialplan` ile Zenginleştirme**
    -   **Durum:** x **Yapılacak (Öncelik 1 - KRİTİK)**
    -   **Problem:** `sip-signaling` servisi, `dialplan`'dan aldığı kullanıcı bilgilerini `agent-service`'e aktaramamaktadır çünkü `CallStartedEvent` mesajında bu veriyi taşıyacak bir alan yoktur. Bu, platformun temel diyalog ve kayıt mantığını kırmaktadır.
    -   **Çözüm:**
        -   [x] `proto/sentiric/event/v1/event.proto` dosyasındaki `CallStartedEvent` mesajına, `sentiric.dialplan.v1.ResolveDialplanResponse` tipinde `dialplan_resolution` adında yeni bir alan eklenmelidir.
        -   [x] Değişiklik sonrası `buf generate` komutu çalıştırılarak tüm diller için kodlar yeniden üretilmelidir.
        -   [x] `go mod tidy` ve `cargo build` gibi dile özgü komutlar çalıştırılarak her şeyin yolunda olduğu doğrulanmalıdır.
        -   [x] Yeni bir MINOR sürüm (örn: `v1.8.9`) yayınlanmalıdır.