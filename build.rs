use std::env;
use std::path::PathBuf;
use std::process::Command;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // build.rs'in çalıştığı geçici dizini alıyoruz
    let out_dir = PathBuf::from(env::var("OUT_DIR")?);
    
    // Bağımlılıkların indirileceği hedef dizini belirliyoruz
    let proto_deps_dir = out_dir.join("proto_deps");

    // buf'ın çalışacağı dizini (projenin kök dizini) belirliyoruz
    let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR")?);

    // buf export komutunu çalıştırarak googleapis'i indiriyoruz
    println!("cargo:rerun-if-changed=proto/buf.yaml");
    let buf_cmd = "buf";
    let status = Command::new(buf_cmd)
        // Komutu projenin kök dizininden çalıştırıyoruz
        .current_dir(&manifest_dir) 
        .arg("export")
        .arg("buf.build/googleapis/googleapis")
        .arg("--output")
        .arg(&proto_deps_dir) // Hedef olarak out_dir'in altını gösteriyoruz
        .status()
        .map_err(|e| format!("`{}` komutu çalıştırılamadı. PATH'te kurulu mu? Hata: {}", buf_cmd, e))?;

    if !status.success() {
        return Err(format!("`{} export` komutu başarısız oldu: {}. Detaylar için logları kontrol edin.", buf_cmd, status).into());
    }

    // Derlenecek dosyalarımızı projenin kök dizinine göre tanımlıyoruz
    let proto_files = &[
        "proto/sentiric/user/v1/user.proto",
        "proto/sentiric/dialplan/v1/dialplan.proto",
        "proto/sentiric/media/v1/media.proto",
        "proto/sentiric/tts/v1/tts.proto",
    ];

    // Derleyiciye hangi dizinlere bakacağını söylüyoruz:
    // 1. Kendi proto dosyalarımızın olduğu klasör
    // 2. buf'ın bağımlılıkları indirdiği klasör
    let proto_include_paths = &[
        "proto",
        proto_deps_dir.to_str().unwrap(),
    ];

    println!("Derleyici arama yolları: {:?}", proto_include_paths);

    // Değişiklikleri takip et
    for file in proto_files {
        println!("cargo:rerun-if-changed={}", file);
    }

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .compile(proto_files, proto_include_paths)?;

    Ok(())
}