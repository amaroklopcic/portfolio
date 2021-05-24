import os, importlib
from flask import Flask, redirect

app = Flask(__name__)

# automatically pull in blueprints from ./apps directory
for app_directory in os.listdir("apps"):
    if "blueprint.py" in os.listdir(f"apps/{app_directory}"):
        module = importlib.import_module(f"apps.{app_directory}.blueprint")
        app.register_blueprint(module.blueprint, url_prefix=f"/{app_directory}")

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
