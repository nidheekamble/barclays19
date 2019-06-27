import os
from flask import Flask, send_from_directory
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
import dialogflow, json, pusher, requests

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628cb0b12ce6c676dfde280ba246'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'
app.config['PWA_ASSETS'] = os.path.join(os.getcwd(), 'pwa', 'dist')


################### RETURNS LATEST BUILD OF PWA ##############################
@app.route("/")
def index_pwa_html():
    return send_from_directory(app.config['PWA_ASSETS'], 'index.html', as_attachment=False)

@app.route("/<path:filename>")
def pwa_assets_request(filename):
    print('FILE::', filename)
    return send_from_directory(app.config['PWA_ASSETS'], filename, as_attachment=False)

##############################################################################

from api.routes import *