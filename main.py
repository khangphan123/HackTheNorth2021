from flask import Flask, flash, redirect, render_template, request, session

from flask_session import Session
from tempfile import mkdtemp

from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError

from werkzeug.security import check_password_hash, generate_password_hash

from flask_mail import Mail, Message
import os


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Helloo, I hope that we can submit this project by the end of the hackathon"

@app.route("/home/", methods=['GET', 'POST'])
def home():
    # use buttons to redirect users to login or create user page
    if request.method == 'POST':
        if request.form['Log In'] == 'login':
            pass # todo: if login button clicked take user to login page
        elif request.form['Create Account'] == 'createuser':
            pass # todo: if create account button pressed take user to register page
    elif request.method == 'GET':
        pass
    return render_template('home.html')

@app.route("/login/")
def login():
    return render_template('login.html')

@app.route("/register/")
def register():
    return render_template('register.html')


if __name__ == "__main__":
    app.run(debug = True)