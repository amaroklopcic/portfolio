import importlib
from pathlib import Path
from flask import Flask, redirect

app = Flask(__name__)

# automatically pull in blueprints from ./apps directory
path_of_this_file = Path(__file__).resolve()
apps_directory = path_of_this_file.parent.joinpath("apps")
for app_directory in apps_directory.iterdir():
    if not app_directory.is_dir():
        continue
    if app_directory.joinpath("blueprint.py").exists():
        module_name = str(app_directory).replace(str(app_directory.parent) + "/", "")
        module = importlib.import_module(f".apps.{module_name}.blueprint", "portfolio")
        app.register_blueprint(module.blueprint, url_prefix=f"/{module_name}")

@app.route("/")
def home():
    if "landing" in app.blueprints:
        return redirect("/landing")
    else:
        return "Hello, World"

@app.errorhandler(404)
def page_not_found(error):
    print(error)
    return "This page does not exist", 404
