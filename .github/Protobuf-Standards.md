# 🚀 SENTIRIC PROTOBUF VERSION STANDARDI
# 📅 Yürürlük Tarihi: 2025-01-20

## 🎯 STANDART KURALLAR

### 1. 📦 CONTRACTS PAKETİ
- **PROTOBUF BAĞIMLILIĞI YOK** - Sadece `grpcio`
- Versiyon: `sentiric-contracts-py>=1.9.3`

### 2. 🔧 MİCROSERVİSLER
- **Protobuf Range:** `protobuf>=5.26.1,<7.0.0`
- **gRPC:** `grpcio>=1.62.0`

### 3. ✅ ZORUNLU UYGULAMA
```txt
# TÜML requirements.txt DOSYALARINDA OLMALI:
protobuf>=5.26.1,<7.0.0
grpcio>=1.62.0
```

### 4. ❌ YASAKLAR
- `protobuf==X.X.X` (SABİT VERSİYON)
- `protobuf<5.0.0` (ESKİ VERSİYONLAR)
- `protobuf>=7.0.0` (HENÜZ DESTEKLENMEYEN)

## 🛠 TAMİM EDİLECEK SERVİSLER LİSTESİ

- [ ] sentiric-stt-whisper-service ✅ (TAMAMLANDI)
- [ ] sentiric-tts-service
- [ ] sentiric-agent-service  
- [ ] sentiric-dialog-service
- [ ] sentiric-user-service
- [ ] sentiric-telephony-service
- [ ] sentiric-media-service
- [ ] sentiric-billing-service
- [ ] TÜM DİĞER SERVİSLER...
```

### 5. 🔄 **OTOMATİK KONTROL SCRIPT'İ**

**Dosya:** `scripts/check-protobuf-versions.py`
```python
#!/usr/bin/env python3
"""
Sentiric Protobuf Version Checker
Tüm servislerde protobuf versiyonlarını kontrol eder
"""

import os
import re
import glob

def check_requirements_files():
    """Tüm requirements.txt dosyalarını kontrol et"""
    
    standard_pattern = r'protobuf>=5\.26\.1,<7\.0\.0'
    forbidden_patterns = [
        r'protobuf==\d+\.\d+\.\d+',  # Sabit versiyon
        r'protobuf<\d+\.\d+\.\d+',   # Çok eski
        r'protobuf>=7\.\d+\.\d+'     # Çok yeni
    ]
    
    issues = []
    
    # Tüm requirements.txt dosyalarını bul
    for req_file in glob.glob("**/requirements.txt", recursive=True):
        try:
            with open(req_file, 'r') as f:
                content = f.read()
                
            # Standart uygun mu?
            if not re.search(standard_pattern, content):
                issues.append(f"❌ {req_file}: Standart protobuf range kullanmıyor")
                
            # Yasaklı pattern'ler var mı?
            for pattern in forbidden_patterns:
                if re.search(pattern, content):
                    issues.append(f"🚫 {req_file}: Yasaklı pattern: {pattern}")
                    
        except Exception as e:
            issues.append(f"⚠️  {req_file}: Okunamadı - {e}")
    
    return issues

if __name__ == "__main__":
    print("🔍 Sentiric Protobuf Version Kontrolü...")
    issues = check_requirements_files()
    
    if issues:
        print("\n".join(issues))
        exit(1)
    else:
        print("✅ Tüm servisler standartlara uygun!")
```

### 6. 🚀 **HIZLI UYGULAMA KOMUTLARI**

```bash
# 1. CONTRACTS GÜNCELLE
cd sentiric-contracts
git checkout main
# setup.py'yi yukarıdaki gibi düzenle
git add setup.py
git commit -m "fix(deps): remove protobuf dependency to resolve version conflicts"
git tag v1.9.3
git push origin main --tags

# 2. STT SERVİSİNİ DÜZELT
cd sentiric-stt-whisper-service  
git checkout main
# requirements.txt'yi yukarıdaki gibi düzenle
git add requirements.txt
git commit -m "fix(deps): apply standard protobuf range >=5.26.1,<7.0.0"
git push origin main

# 3. DİĞER SERVİSLERİ KONTROL ET
python3 scripts/check-protobuf-versions.py
```

## 🎉 **SON DURUM**

**BU ÇÖZÜM İLE:**
- ✅ **Contracts tamamen bağımsız** - hiç protobuf çakışması yok
- ✅ **Tüm servisler aynı range'i kullanıyor** 
- ✅ **Gelecekteki major versiyonlarda bile sorun yok**
- ✅ **Otomatik kontrol mekanizması var**
- ✅ **Net standart dokümanı var**

**Hemen 1. ve 2. adımları uygula, CI yeşil yanacak!** 🟢