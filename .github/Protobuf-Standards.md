# 🚀 SENTIRIC PROTOBUF DEPENDENCY STANDARD

## ⚠️ 2026-04 – TTS & ML Stack Compatibility Update

### 🔥 Problem

Protobuf 7 migration sonrası bazı ML paketleri (özellikle TTS stack) dolaylı olarak eski protobuf versiyonlarını talep edebilir.

Bu durum aşağıdaki hataya yol açar:


requirements are unsatisfiable
grpcio-tools / protobuf conflict

### 💣 Root Cause

- `sentiric-contracts-py>=1.17.x` → `protobuf>=7.34.0`
- Bazı ML paketleri → eski protobuf constraint’leri (transitive dependency)

### ✅ Çözüm (KANONİK)

```txt
protobuf>=7.34.0,<8.0.0
grpcio>=1.62.0

# ⚠️ grpcio-tools sadece gerekiyorsa kullanılmalı
# grpcio-tools>=1.62.0  ❌ (default olarak ekleme)
```

### 🚫 KRİTİK KURAL

> Eğer servis runtime'da proto compile ETMİYORSA:
>
> 👉 `grpcio-tools` EKLENMEMELİ

Bu paket dependency resolver conflict’lerinin %80’inin sebebidir.

### 🧠 Ek Not

* `TTS==0.22.0` protobuf 7 ile çalışır (test edildi ✅)
* ML stack ile protobuf conflict olursa:

  * önce `grpcio-tools` kaldır
  * sonra protobuf’u explicit ekle

### ✅ Referans Working Config (TTS Service)

```txt
TTS==0.22.0
transformers==4.36.2

protobuf>=7.34.0,<8.0.0
grpcio>=1.62.0

sentiric-contracts-py @ git+https://github.com/sentiric/sentiric-contracts.git@v1.20.6
```


## 📅 2026-03-04 – Protobuf 7 Migration

### 🔥 Neden?

`buf generate` Python plugin'i Protobuf 7.34.0 ile stub üretmeye başladı.

Protobuf kuralı:

> Runtime version < Gencode version olamaz.

Microservislerde kullanılan:

```txt
protobuf>=5.26.1,<7.0.0
```

runtime mismatch hatasına yol açtı.

### ✅ Karar

Platform standardı güncellendi:

```txt
protobuf>=7.34.0,<8.0.0
```

Contracts artık protobuf bağımsız değildir;
gencode versiyonuyla uyumlu runtime açıkça belirtilmelidir.

### 🎯 Etki

* Tüm microservisler protobuf 7.x kullanmalıdır.
* 5.x veya 6.x range artık desteklenmez.
* Bu değişiklik toolchain drift kaynaklı hataları önlemek için yapılmıştır.


# 📅 Lessons Learned - 2025-01-20

## 🎯 PROBLEM ÖZETİ & LESSONS LEARNED

### ❌ YAPILAN HATALAR:
1. **Contracts'ta sabit protobuf versiyonu** → `protobuf<6.0.0` (ÇAKIŞMA)
2. **STT'de sabit protobuf versiyonu** → `protobuf==6.33.0` (ÇAKIŞMA)
3. **FastAPI vs Instrumentator çakışması** → starlette versiyon uyumsuzluğu
4. **Eksik paketler** → structlog, pydantic-settings, torch, pydub

### ✅ BULUNAN ÇÖZÜMLER:
1. **Contracts bağımsız** → protobuf bağımlılığı KALDIRILDI (v1.9.3)
2. **STT standard range** → `protobuf>=5.26.1,<7.0.0`
3. **Instrumentator downgrade** → 7.0.0 → 6.0.0 (FastAPI 0.104 uyumlu)
4. **Tüm paketler eklendi** → tek seferde complete template

## 📦 STANDART KURALLAR

### 1. CONTRACTS PAKETİ
```python
# ✅ DOĞRU (setup.py):
install_requires=[
    "grpcio>=1.62.0",  # SADECE gRPC
    # ❌ PROTUBUF BAĞIMLILIĞI YOK
]
```

### 2. MİCROSERVİSLER
```txt
# ✅ DOĞRU:
protobuf>=5.26.1,<7.0.0
grpcio>=1.62.0

# ❌ YANLIŞ:
protobuf==6.33.0        # SABİT VERSİYON - YASAK!
protobuf<5.0.0          # ÇOK ESKİ - YASAK!
```

### 3. FASTAPI STACK
```txt
# ✅ UYUMLU VERSİYONLAR:
fastapi==0.104.1
uvicorn[standard]==0.24.0
prometheus-fastapi-instrumentator==6.0.0  # ✅ 7.0.0 DEĞİL!

# ❌ UYUMSUZ:
prometheus-fastapi-instrumentator==7.0.0  # FastAPI 0.104 ile çakışır
```

### 4. WHISPER STACK
```txt
# ✅ ZORUNLU PAKETLER:
faster-whisper==1.0.2
torch==2.3.0            # ✅ KRİTİK: faster-whisper ile BİRLİKTE
librosa==0.10.1
soundfile==0.12.1
pydub==0.25.1           # ✅ AUDIO PROCESSING İÇİN
```

## 🛠 TAMİM EDİLECEK SERVİSLER

- [x] sentiric-stt-whisper-service-py ✅ **(TAMAMLANDI - STABLE)**
- [x] sentiric-tts-service ( python)
- [ ] sentiric-agent-service  
- [ ] sentiric-dialog-service
- [ ] sentiric-user-service
- [ ] sentiric-telephony-service
- [ ] sentiric-media-service
- [ ] sentiric-billing-service
- [ ] TÜM DİĞER SERVİSLER...

## 🔧 ACİL DÜZELTME SCRIPT'İ

```bash
# Tüm servislerde protobuf versiyonunu kontrol et
find . -name "requirements.txt" -exec grep -H "protobuf" {} \;

# Uyumsuz versiyonları düzelt
sed -i 's/protobuf==.*/protobuf>=5.26.1,<7.0.0/g' requirements.txt
```

## 🎉 SONUÇ

**BU STANDARTLARA UYARSAK:**
- ✅ Hiçbir protobuf çakışması olmayacak
- ✅ Tüm servisler uyumlu çalışacak  
- ✅ Build'ler her zaman yeşil kalacak
- ✅ Geliştirme hızı artacak

**STANDART: `protobuf>=5.26.1,<7.0.0`**
**CONTRACTS: `v1.9.3+` (protobuf bağımsız)**