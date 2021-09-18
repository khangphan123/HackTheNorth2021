# from flask import Flask, flash, redirect, render_template, request, session

# from flask_session import Session
# from tempfile import mkdtemp

# from flask_sqlalchemy import SQLAlchemy

# from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError

# from werkzeug.security import check_password_hash, generate_password_hash
# from datetime import datetime
# from flask_mail import Mail, Message
# import os
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://test.db'

# app = Flask(__name__)

# db = SQLAlchemy(app)

# class database(db.Model):
#     id = db.Column(db.Integer, primary_key = True)
#     username = db.Column(db.String(500), nullable = False)
#     hash_password = db.Column(db.String(500), nullable = False )
#     date_created = db.Column(db.DateTime, default = datetime.utcnow)

#     def __repr__(self):
#         return '<Task %r' % self.id

# db.create_all()
# @app.route("/", methods=['GET', 'POST'])
# def home():
#     return render_template('home.html')

# @app.route("/login", methods=['GET', 'POST'])
# def login():
#     return "render_template('login.html')"

# @app.route("/register/", methods=['GET', 'POST'])
# def register():
#     return "'render_template('register.html')'"



# @app.route("/dashboard")
# def profile():
#     return render_template("dashboard.html")

# @app.route("/request")
# def request():
#     return "ji"
    

# if __name__ == "__main__":
#     app.run(debug = True)

from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login/')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)