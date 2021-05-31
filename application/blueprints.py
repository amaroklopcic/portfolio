from pathlib import Path
from importlib import import_module

all_blueprints = []

path_of_this_file = Path(__file__).resolve()
apps_directory = path_of_this_file.parent.joinpath("apps")
for app_directory in apps_directory.iterdir():
    if not app_directory.is_dir():
        continue
    if app_directory.joinpath("blueprint.py").exists():
        module_name = str(app_directory).replace(str(app_directory.parent) + "/", "")
        module = import_module(f"application.apps.{module_name}.blueprint")
        all_blueprints.append(module.blueprint)
