from flask import Flask, redirect

from .apps import app_plugins

app = Flask(__name__)

for plugin in app_plugins:
    app.register_blueprint(plugin.blueprint, url_prefix=f"/{plugin.blueprint.name}")

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
