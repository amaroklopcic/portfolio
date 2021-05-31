from flask import Blueprint

blueprint = Blueprint("landing", __name__, url_prefix="/landing", static_folder="build")

@blueprint.route("/")
def landing_home():
    print("/landing/ route hit")
    return blueprint.send_static_file("index.html")
