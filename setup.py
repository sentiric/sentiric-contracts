# setup.py
from setuptools import setup, find_namespace_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    # --- KRİTİK DÜZELTME ---
    # Paket adını npm paketinden ayrıştırmak için sonuna '-py' ekliyoruz.
    name="sentiric-contracts-py",
    version="1.0.2", # Bu versiyon CI tarafından güncellenecek
    author="Sentiric Team",
    author_email="dev@sentiric.ai",
    description="Auto-generated Python gRPC stubs for the Sentiric platform.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/sentiric/sentiric-contracts",
    project_urls={
        "Repository": "https://github.com/sentiric/sentiric-contracts",
    },
    packages=find_namespace_packages(where="gen/python"),
    package_dir={"": "gen/python"},
    install_requires=[
        "grpcio>=1.64.1",
        "protobuf>=4.25.3",
        "google-api-python-client",
    ],
    python_requires=">=3.8",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
)