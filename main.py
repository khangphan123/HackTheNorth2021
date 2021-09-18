from flask import Flask, flash, redirect, render_template, request, session

from flask_session import Session
from tempfile import mkdtemp

from flask_sqlalchemy import SQLAlchemy

from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError

from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime
from flask_mail import Mail, Message
import os
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://test.db'

app = Flask(__name__)

db = SQLAlchemy(app)

class database(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(500), nullable = False)
    hash_password = db.Column(db.String(500), nullable = False )
    date_created = db.Column(db.DateTime, default = datetime.utcnow)

    def __repr__(self):
        return '<Task %r' % self.id

db.create_all()
@app.route("/", methods=['GET', 'POST'])
def home():
    # use buttons to redirect users to login or create user page
    if request.method == 'POST':
        pass
    return render_template('home.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route("/register/", methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        username = request.methods.get("username")
        password = request.methods.get("password")
        confirmation = request.method.get("confirmation")
    if not username:
        return error("You must put in your username")
    if not password or not confirmation:
        return error("You must put in your password")
    if password != confirmation:
        return error("Your password and your confirmation must match")
    hash = generate_password_hash(password)

    return render_template('register.html')


if __name__ == "__main__":
    app.run(debug = True)