# 🏷️ Sentiric Contracts - Görev Listesi (v1.8.10)

Bu belge, `sentiric-contracts` deposuna yapılan ve planlanan değişiklikleri listeler.

---

### **FAZ 3: Veri Bütünlüğü ve Zenginleştirilmiş Bağlam (Mevcut Odak)**

-   **Görev ID: CT-FEAT-01 - `CallStartedEvent` Mesajını `dialplan` ile Zenginleştirme**
    -   **Durum:** ⬜ **Yapılacak (Öncelik 1 - KRİTİK)**
    -   **Açıklama:** Uçtan uca test logları, `sip-signaling`'in `dialplan`'dan aldığı kullanıcı bilgilerini `call.started` olayına ekleyemediğini kesin olarak kanıtlamıştır. Bu, platformdaki en büyük veri bütünlüğü sorunudur ve `agent-service`'in kullanıcıyı tanıyamamasına, dolayısıyla `cdr-service`'in de çağrıları doğru eşleştirememesine yol açmaktadır.
    -   **Kabul Kriterleri:**
        -   [ ] `proto/sentiric/event/v1/event.proto` dosyasındaki `CallStartedEvent` mesajına, `sentiric.dialplan.v1.ResolveDialplanResponse` tipinde `dialplan_resolution` adında yeni bir alan eklenmelidir.
        -   [ ] Kod üretimi (`buf generate`) başarıyla tamamlanmalı ve tüm diller için yeni kodlar oluşturulmalıdır.
        -   [ ] Yeni bir sürüm (örn: `v1.8.10`) yayınlanmalıdır.