fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_files = &[
        "../../proto/sentiric/user/v1/user.proto",
        "../../proto/sentiric/dialplan/v1/dialplan.proto",
    ];
    let proto_includes = &["../../proto"];
    tonic_build::configure()
        .out_dir("src/lib") // Üretilen kodları src/lib içine koy
        .compile(proto_files, proto_includes)?;
    Ok(())
}