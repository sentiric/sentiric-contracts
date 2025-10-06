# 📜 Protobuf Standartları Kılavuzu (v1.9.0)

Bu belge, Sentiric Contracts deposunda yer alan tüm Protobuf tanımlarının uyması gereken zorunlu adlandırma, organizasyon ve uyumluluk kurallarını içerir.

---

## 1. Dizin ve Organizasyon Kuralları

Tüm `.proto` dosyaları aşağıdaki hiyerarşiye uymalıdır:

*   **Kök Dizin:** `proto/sentiric`
*   **Paket/Sürüm Hiyerarşisi:** `proto/sentiric/{servis_veya_kategori}/v1/{dosya_adı}.proto`
*   **Paket Adı Kuralı:** `package sentiric.{servis_veya_kategori}.v1;` (Örn: `sentiric.telephony.v1`)

| Kategori | Paket Örneği | İçerik Tipi |
|---|---|---|
| **data** | `sentiric.data.v1` | Paylaşılan (Hizmet İçermeyen) Mesajlar (Context, Schema) |
| **external** | `sentiric.external.v1` | Harici Bağlantı RPC'leri (Payment, Notification) |
| **telephony** | `sentiric.telephony.v1` | Yeni Çekirdek Aksiyon RPC'leri |
| **vertical** | `sentiric.vertical.v1` | Dikey İş Mantığı RPC'leri (Hospitality, Finance) |

---

## 2. Adlandırma (BPF - Best Practices) Kuralları

Buf'un zorladığı temel adlandırma standardı (BPF) uygulanmalıdır.

### A. RPC ve Mesaj Adlandırma

Her RPC metodu, benzersiz bir istek ve yanıt mesajı kullanmalıdır. Mesaj adları, RPC adını yansıtmalıdır.

| Öğe | Kural | Örnek |
|---|---|---|
| **Servis** | `PascalCase`, Servis ile bitmeli | `TelephonyActionService` |
| **RPC** | `PascalCase` | `PlayAudio`, `ProcessCallStart` |
| **İstek Mesajı** | `{RPC Adı}Request` | `PlayAudioRequest`, `ProcessCallStartRequest` |
| **Yanıt Mesajı** | `{RPC Adı}Response` | `PlayAudioResponse`, `ProcessCallStartResponse` |
| **Mesaj (Genel Data)** | `PascalCase` | `User`, `Tenant`, `CallContext` |
| **Alanlar** | `snake_case` | `user_id`, `is_primary` |

### B. Olay Mesajları (Events)

Asenkron iletişim için kullanılan mesajlar, eylemi yansıtmalıdır.

| Öğe | Kural | Örnek |
|---|---|---|
| **Olay Mesajı** | Eylemi Geçmiş Zamanda yansıtmalı. | `CallStartedEvent`, `UsageRecordedEvent` |

---

## 3. Geriye Dönük Uyumluluk (SemVer)

`sentiric-contracts` Semantic Versioning (SemVer) kullanır: `MAJOR.MINOR.PATCH`.

### A. Geriye Dönük Uyumlu Değişiklikler (`MINOR` veya `PATCH`)

Aşağıdaki değişiklikler BPF/SemVer uyumludur ve kırıcı değildir:

*   Yeni RPC'ler eklemek.
*   Mevcut Mesajlara yeni `optional` alanlar eklemek.
*   Mevcut Mesajlara yeni `repeated` alanlar eklemek (genellikle `MINOR` artırır).
*   Mevcut mesajlarda alan numaralarını değiştirmemek.

### B. Kırıcı Değişiklikler (`MAJOR` Artışı Gerektirir)

Aşağıdaki değişiklikler kırıcıdır ve **sıkı bir şekilde yasaktır** (MAJOR sürüm artışı gerektirir):

*   Mevcut bir mesajdaki bir alanı silmek veya yeniden adlandırmak.
*   Mevcut bir RPC metodunu silmek veya imzasını değiştirmek.
*   Alan numaralarını değiştirmek.
*   `optional` olan bir alanı zorunlu yapmak.

### C. Kullanımdan Kaldırma (Deprecation)

Eski RPC'ler veya mesajlar kaldırılmadan önce en az iki Minor sürüm boyunca `deprecated = true` niteliği ile işaretlenmelidir.

```protobuf
rpc TerminateCall(TerminateCallRequest) returns (TerminateCallResponse) {
  option deprecated = true; 
}
```

---
