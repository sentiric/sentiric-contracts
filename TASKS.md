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

-   [ ] **Görev ID: CT-002 - User Service İçin Tam CRUD Operasyonları Ekleme**
    -   **Açıklama:** `user-service`'in tam yönetimsel yeteneklere kavuşması için gereken tüm RPC ve mesaj tanımlarını `user.proto`'ya ekle.
    -   **Durum:** ⬜ **Planlandı**
    -   **Kabul Kriterleri:**
        -   [ ] `UserService` servisine `UpdateUser`, `DeleteUser`, `AddContact`, `UpdateContact`, `DeleteContact` RPC'leri eklenmeli.
        -   [ ] `UpdateUserRequest` mesajı, güncellenecek `User` nesnesini ve hangi alanların güncelleneceğini belirten bir `google.protobuf.FieldMask` içermeli. `UpdateUserResponse` ise güncellenmiş `User` nesnesini dönmeli.
        -   [ ] `DeleteUserRequest` (user_id) ve `DeleteUserResponse` (boş veya success bool) mesajları eklenmeli.
        -   [ ] `AddContactRequest` (user_id, Contact) ve `AddContactResponse` (güncellenmiş User) mesajları eklenmeli.
        -   [ ] `UpdateContactRequest` (Contact, FieldMask) ve `UpdateContactResponse` (güncellenmiş User) mesajları eklenmeli.
        -   [ ] `DeleteContactRequest` (contact_id) ve `DeleteContactResponse` (güncellenmiş User) mesajları eklenmeli.
        -   [ ] `build.rs` ve `src/lib.rs`'in sorunsuz çalıştığı doğrulanmalı.
        -   [ ] Değişiklikler `v1.8.4` olarak etiketlenip yayınlanmalı.        