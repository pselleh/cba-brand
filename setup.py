from setuptools import setup, find_packages

setup(
    name="cba-brand",
    version="0.1.0",
    packages=find_packages(),
    entry_points={
        "tutor.plugin.v1": [
            "cba-brand = cba_brand.plugin",
        ],
    },
)
