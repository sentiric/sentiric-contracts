// ========== FILE: sentiric-contracts/build.rs ==========
use std::process::Command;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. Adım: Bağımlılıkları geçici bir klasöre indir.
    // Bu, `buf.yaml` dosyasındaki `deps` listesini okur ve
    // googleapis gibi bağımlılıkları indirir.
    let buf_export_dir = std::path::PathBuf::from(std::env::var("OUT_DIR")?).join("proto_deps");
    
    let status = Command::new("buf")
        .arg("export")
        .arg("buf.build/googleapis/googleapis")
        .arg("--output")
        .arg(&buf_export_dir)
        .arg("--config")
        .arg("proto/buf.yaml") // Konfigürasyon dosyasının yerini belirt
        .status()?;

    if !status.success() {
        return Err("buf export failed".into());
    }

    // 2. Adım: tonic_build'a hem kendi proto dosyalarımızın olduğu yeri,
    // hem de bağımlılıkları indirdiğimiz yeri söyle.
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .compile(
            &[
                "proto/sentiric/user/v1/user.proto",
                "proto/sentiric/dialplan/v1/dialplan.proto",
                "proto/sentiric/media/v1/media.proto",
            ],
            &[
                "proto", // Kendi .proto dosyalarımız
                buf_export_dir.to_str().unwrap(), // Bağımlılıkların olduğu yer
            ],
        )?;

    Ok(())
}