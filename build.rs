// ========== FILE: sentiric-contracts/build.rs (GÜNCELLENMİŞ VE SAĞLAMLAŞTIRILMIŞ) ==========
use std::env;
use std::path::PathBuf;
use std::process::Command;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = PathBuf::from(env::var("OUT_DIR")?);
    let proto_deps_dir = out_dir.join("proto_deps");

    // Eğer proto_deps klasörü yoksa buf export komutunu çalıştır
    if !proto_deps_dir.exists() {
        println!("cargo:rerun-if-changed=proto/buf.yaml");
        println!("`proto_deps` bulunamadı, `buf export` çalıştırılıyor...");

        let buf_cmd = "buf";
        let status = Command::new(buf_cmd)
            .arg("export")
            .arg("buf.build/googleapis/googleapis")
            .arg("--output")
            .arg(&proto_deps_dir)
            .arg("--config")
            .arg("proto/buf.yaml") // buf.yaml'ın ana dizindeki proto klasöründe olduğunu varsayıyoruz
            .status()
            .map_err(|e| {
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
    } else {
        println!("`proto_deps` zaten mevcut, `buf export` atlanıyor.");
    }

    // Derlenecek proto dosyalarının listesi
    let proto_files = &[
        "proto/sentiric/user/v1/user.proto",
        "proto/sentiric/dialplan/v1/dialplan.proto",
        "proto/sentiric/media/v1/media.proto",
        "proto/sentiric/tts/v1/tts.proto",
    ];

    // Derleyiciye hangi dizinlere bakacağını söylüyoruz.
    let proto_include_paths = &[
        "proto", // Kendi .proto dosyalarımızın kök dizini
        proto_deps_dir.to_str().unwrap(), // Bağımlılıkların indirildiği dizin
    ];

    println!("Derleyici arama yolları: {:?}", proto_include_paths);

    // Değişiklik olduğunda yeniden derlemeyi tetikle
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