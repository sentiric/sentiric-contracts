// ========== FILE: sentiric-contracts/build.rs (v3 - KURŞUN GEÇİRMEZ VERSİYON) ==========
use std::env;
use std::path::{Path, PathBuf};
use std::process::Command;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Projenin kök dizinini, bu build.rs dosyasının konumuna göre buluyoruz.
    // Bu, Cargo'nun script'i nereye kopyaladığından bağımsız çalışmasını sağlar.
    let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR")?);
    println!("CARGO_MANIFEST_DIR: {}", manifest_dir.display());

    let out_dir = PathBuf::from(env::var("OUT_DIR")?);
    let proto_deps_dir = out_dir.join("proto_deps");

    // İhtiyaç duyacağımız ana yolları belirliyoruz
    let project_proto_dir = manifest_dir.join("proto");
    let buf_yaml_path = project_proto_dir.join("buf.yaml");

    println!("`proto` dizini yolu: {}", project_proto_dir.display());
    println!("`buf.yaml` yolu: {}", buf_yaml_path.display());

    // buf.yaml dosyasının var olup olmadığını kontrol et
    if !buf_yaml_path.exists() {
        return Err(format!("buf.yaml dosyası beklenen konumda bulunamadı: {}", buf_yaml_path.display()).into());
    }

    // `buf export` komutunu çalıştır
    println!("cargo:rerun-if-changed={}", buf_yaml_path.display());
    let buf_cmd = "buf";
    let status = Command::new(buf_cmd)
        .current_dir(&project_proto_dir) // <-- EN KRİTİK DEĞİŞİKLİK: Komutu doğru klasörde çalıştır
        .arg("export")
        .arg("buf.build/googleapis/googleapis")
        .arg("--output")
        .arg(&proto_deps_dir)
        // Artık --config demeye gerek yok çünkü doğru klasördeyiz
        .status()
        .map_err(|e| format!("`{}` komutu çalıştırılamadı. PATH'te kurulu mu? Hata: {}", buf_cmd, e))?;

    if !status.success() {
        return Err(format!("`{} export` komutu başarısız oldu: {}. Detaylar için logları kontrol edin.", buf_cmd, status).into());
    }
    
    // Derlenecek proto dosyalarının yollarını kök dizine göre tam olarak belirt
    let proto_files = &[
        project_proto_dir.join("sentiric/user/v1/user.proto"),
        project_proto_dir.join("sentiric/dialplan/v1/dialplan.proto"),
        project_proto_dir.join("sentiric/media/v1/media.proto"),
        project_proto_dir.join("sentiric/tts/v1/tts.proto"),
    ];

    // Derleyiciye hangi dizinlere bakacağını söylüyoruz
    let proto_include_paths: &[&Path] = &[
        &project_proto_dir,
        &proto_deps_dir,
    ];

    println!("Derleyici arama yolları: {:?}", proto_include_paths);

    // Değişiklik olduğunda yeniden derlemeyi tetikle
    for file in proto_files {
        println!("cargo:rerun-if-changed={}", file.display());
    }

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .compile(proto_files, proto_include_paths)?;

    Ok(())
}