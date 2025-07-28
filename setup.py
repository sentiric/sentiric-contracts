# setup.py
from setuptools import setup, find_namespace_packages
import os

# Kodun üretildiği 'gen/python' dizinini bul
package_dir = os.path.join("gen", "python")

setup(
    name="sentiric-contracts",
    # YENİ VERSİYON: Diğerleriyle senkronize hale getiriyoruz.
    version="0.6.1",
    author="Sentiric Team",
    author_email="dev@sentiric.ai",
    description="Auto-generated gRPC contracts for the Sentiric platform.",
    packages=find_namespace_packages(where=package_dir),
    package_dir={"": package_dir},
    install_requires=[
        "grpcio>=1.64.1",
        "protobuf>=4.25.3",
        # YENİ EKLENEN BAĞIMLILIK: google.protobuf.Struct gibi tipler için bu gerekli.
        "google-api-python-client",
    ],
    python_requires=">=3.8",
)