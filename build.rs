// ========== FILE: sentiric-contracts/build.rs ==========
use std::process::Command;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. Adım: Bağımlılıkları geçici bir klasöre indir.
    let out_dir = std::env::var("OUT_DIR")?;
    let buf_export_dir = std::path::Path::new(&out_dir).join("proto_deps");
    
    println!("cargo:rerun-if-changed=proto/buf.yaml");

    // `buf` komutunun varlığını kontrol et ve daha iyi bir hata mesajı ver
    let buf_cmd = "buf";
    let status = Command::new(buf_cmd)
        .arg("export")
        .arg("buf.build/googleapis/googleapis")
        .arg("--output")
        .arg(&buf_export_dir)
        .arg("--config")
        .arg("proto/buf.yaml")
        .status()
        .map_err(|e| {
            // Eğer komut hiç bulunamazsa, bu hata tetiklenir.
            format!(
                "Failed to execute `{}`. Is `buf` installed and in your PATH? Error: {}",
                buf_cmd, e
            )
        })?;

    if !status.success() {
        return Err(format!(
            "`{} export` command failed with status: {}. Check build logs for details.",
            buf_cmd, status
        )
        .into());
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