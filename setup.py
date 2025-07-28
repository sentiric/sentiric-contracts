# setup.py
from setuptools import setup, find_namespace_packages

setup(
    name="sentiric-contracts",
    version="1.0.1",
    author="Sentiric Team",
    author_email="dev@sentiric.ai",
    description="Auto-generated gRPC contracts for the Sentiric platform, published to PyPI.",
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url="https://github.com/sentiric/sentiric-contracts",
    packages=find_namespace_packages(where="gen/python"),
    package_dir={"": "gen/python"},
    install_requires=[
        "grpcio>=1.64.1",
        "protobuf>=4.25.3",
        "google-api-python-client", # google.protobuf.Struct için
    ],
    python_requires=">=3.8",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
)