from pathlib import Path
from importlib import import_module

app_plugins = []

package_dir = Path(__file__).resolve().parent

# iterate through subdirectories of "apps" directory
for sub_pkg_dir in package_dir.iterdir():
    if sub_pkg_dir.joinpath("blueprint.py").exists():
        sub_pkg_name = str(sub_pkg_dir).replace(str(sub_pkg_dir.parent) + "/", "")
        module = import_module(f"{__name__}.{sub_pkg_name}.blueprint")
        app_plugins.append(module)
