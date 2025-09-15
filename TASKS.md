# 🏷️ Sentiric Contracts - Görev Listesi (v1.8.10)

Bu belge, `sentiric-contracts` deposuna yapılan ve planlanan değişiklikleri listeler.

---

### **FAZ 2: Asenkron İletişim Standardizasyonu ve Tam CRUD Yetenekleri (Tamamlandı)**

-   [x] **Görev ID: CT-001 - Standart Olay (Event) Mesajları Tanımlama**
-   [x] **Görev ID: CT-002 - User Service İçin Tam CRUD Operasyonları Ekleme**

---

### **FAZ 3: Veri Bütünlüğü ve Zenginleştirilmiş Bağlam (Sıradaki Öncelik)**

-   **Görev ID: CT-FEAT-01 - `CallStartedEvent` Mesajını Kullanıcı Bilgileriyle Zenginleştirme**
    -   **Durum:** ⬜ **Yapılacak (Öncelik 1 - KRİTİK)**
    -   **Açıklama:** Canlı testler, `sip-signaling`'in `dialplan`'dan aldığı kullanıcı bilgilerini `call.started` olayına eklememesi nedeniyle `agent-service`'in kullanıcıyı tanıyamadığını ve `cdr-service`'in çağrıları kullanıcılarla eşleştiremediğini kesin olarak kanıtlamıştır. Bu, platformdaki en büyük veri bütünlüğü sorunudur.
    -   **Kabul Kriterleri:**
        -   [ ] `proto/sentiric/event/v1/event.proto` dosyasındaki `CallStartedEvent` mesajına, `sentiric.dialplan.v1.ResolveDialplanResponse` tipinde `dialplan_resolution` adında yeni bir alan eklenmelidir.
        -   [ ] Kod üretimi (`buf generate`) başarıyla tamamlanmalı ve tüm diller için yeni kodlar oluşturulmalıdır.
        -   [ ] Yeni bir sürüm (`v1.8.10`) yayınlanmalıdır.