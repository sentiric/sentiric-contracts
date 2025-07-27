# setup.py
from setuptools import setup, find_namespace_packages
import os

# Kodun üretildiği 'gen/python' dizinini bul
package_dir = os.path.join("gen", "python")

setup(
    name="sentiric-contracts",
    # Versiyonu CI/CD'nin otomatik olarak güncellemesi en iyisidir,
    # ama şimdilik manuel olarak bir sonraki versiyonu yazalım.
    version="0.4.3",
    author="Sentiric Team",
    author_email="dev@sentiric.ai",
    description="Auto-generated gRPC contracts for the Sentiric platform.",
    packages=find_namespace_packages(where=package_dir),
    package_dir={"": package_dir},
    # Bu paketin çalışması için gereken temel kütüphaneler
    install_requires=[
        "grpcio>=1.64.1",
        "protobuf>=4.25.3",
    ],
    python_requires=">=3.8",
)