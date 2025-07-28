use std::fs;
use std::path::PathBuf;
use std::io::{self, Write};
use walkdir::WalkDir;

fn main() -> io::Result<()> {
    // 1. Buf'ın ürettiği Rust dosyalarının bulunduğu dizin
    let gen_rust_dir = PathBuf::from("gen/rust");

    if !gen_rust_dir.exists() {
        // Eğer buf generate çalıştırılmadıysa, hiçbir şey yapma.
        // Bu, CI ortamlarında veya temiz bir klonda hatayı önler.
        let mut stderr = io::stderr();
        writeln!(stderr, "warning: Directory 'gen/rust' not found. Skipping serde derive injection. Run 'buf generate' first.")?;
        return Ok(());
    }

    println!("cargo:rerun-if-changed={}", gen_rust_dir.display());

    // 2. Bu dizindeki tüm .rs dosyalarını bul
    for entry in WalkDir::new(&gen_rust_dir).into_iter().filter_map(|e| e.ok()) {
        if entry.path().extension().map_or(false, |s| s == "rs") {
            let path = entry.path();
            let mut content = fs::read_to_string(path)?;

            // 3. Her prost::Message'in üzerine serde derive'ı ekle
            // Bu, 'prost-build' tarafından üretilen kodun yapısını hedefler.
            let modified_content = content.replace(
                "#[allow(clippy::derive_partial_eq_without_eq)]\n#[derive(Clone, PartialEq, ::prost::Message)]",
                "#[allow(clippy::derive_partial_eq_without_eq)]\n#[derive(Clone, PartialEq, ::prost::Message, serde::Serialize, serde::Deserialize)]"
            );
            
            // Eğer değişiklik olduysa dosyayı tekrar yaz
            if content != modified_content {
                fs::write(path, modified_content)?;
                println!("cargo:warning=Injected serde derive into {}", path.display());
            }
        }
    }

    Ok(())
}