from flask import Flask, flash, redirect, render_template, request, session

from flask_session import Session
from tempfile import mkdtemp

from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError

from werkzeug.security import check_password_hash, generate_password_hash

from flask_mail import Mail, Message
import os


app = Flask(__name__)




@app.route("/", methods=['GET', 'POST'])
def home():
    # use buttons to redirect users to login or create user page
    if request.method == 'POST':
        pass
    return render_template('home.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route("/register", methods=['GET', 'POST'])
def register():
    return render_template('register.html')


if __name__ == "__main__":
    app.run(debug = True)