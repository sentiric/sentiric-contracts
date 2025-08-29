# 🏷️ Sentiric Contracts - Görev Listesi (v1.8.4)

Bu belge, `sentiric-contracts` deposuna yapılan ve planlanan değişiklikleri listeler.

---

### **FAZ 2: Asenkron İletişim Standardizasyonu ve Tam CRUD Yetenekleri**

-   [x] **Görev ID: CT-001 - Standart Olay (Event) Mesajları Tanımlama**
    -   **Açıklama:** RabbitMQ üzerinden taşınacak olaylar için `proto/sentiric/event/v1/event.proto` altında standart Protobuf mesajları oluşturuldu.
    -   **Durum:** ✅ **Tamamlandı (v1.8.4)**
    -   **Kabul Kriterleri:**
        -   [x] `event.proto` dosyası oluşturuldu.
        -   [x] `CallStartedEvent`, `CallEndedEvent`, `UserIdentifiedForCallEvent`, `CallRecordingAvailableEvent` mesajları tanımlandı.
        -   [x] `build.rs` ve `src/lib.rs` yeni dosyayı içerecek şekilde güncellendi.
        -   [x] Değişiklikler v1.8.4 sürümüyle yayınlandı.

-   [x] **Görev ID: CT-002 - User Service İçin Tam CRUD Operasyonları Ekleme**
    -   **Açıklama:** `user-service`'in tam yönetimsel yeteneklere kavuşması için gereken tüm RPC ve mesaj tanımları `user.proto`'ya eklendi.
    -   **Durum:** ✅ **Tamamlandı (v1.8.4)**
    -   **Kabul Kriterleri:**
        -   [x] `UserService` servisine `UpdateUser`, `DeleteUser`, `AddContact`, `UpdateContact`, `DeleteContact` RPC'leri eklendi.
        -   [x] Gerekli tüm `Request` ve `Response` mesajları (`FieldMask` dahil) eklendi.
        -   [x] Değişiklikler v1.8.4 sürümüyle yayınlandı.