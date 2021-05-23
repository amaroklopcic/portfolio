# without this file, app wont be loaded
from flask import Blueprint

blueprint = Blueprint("landing", __name__, static_folder="build")

@blueprint.route("/")
def home():
    return blueprint.send_static_file("index.html")
