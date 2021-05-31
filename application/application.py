from flask import Flask, Response, redirect
import json

from application.blueprints import all_blueprints

app = Flask("application")

for bp in all_blueprints:
    app.register_blueprint(bp)

@app.route("/")
def home():
    print("Home route ran")
    if "landing" in app.blueprints:
        return redirect("/landing")
    else:
        return "Hello, World"

@app.route("/info")
def info():
    return Response(json.dumps({
        "Number of blueprints loaded": len(app.blueprints),
        "Blueprint names": str(app.blueprints),
        "Rules": str(app.url_map)
    }), mimetype="application/json")

@app.errorhandler(404)
def page_not_found(error):
    print(error)
    return "This page does not exist", 404
