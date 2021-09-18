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


if __name__ == "__main__":
    app.run(debug = True)