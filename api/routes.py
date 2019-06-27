from api import app, db
from flask import request
import time
import hashlib
from sqlalchemy import or_, and_
from sqlalchemy.orm import Session
from flask_login import login_user, current_user, logout_user, login_required, UserMixin
from flask import Flask, session, render_template, url_for, flash, redirect, request, send_from_directory
from api.forms import UserForm, LoginForm
from api.models import User, Stocks, Favourites
#Sample AJAX REQUEST

@app.route('/api/hello', methods=['POST'])
def hello():
	time.sleep(1)
	return 'Hello'



@app.route('/api/login', methods=['GET', 'POST'])
def login():
	form = LoginForm()
	name = form.username.data
	password = form.password.data
	user = User.query.filter_by(name=name).first()

	s = 0
	for char in password:
		a = ord(char) #ASCII
		s = s+a #sum of ASCIIs acts as the salt
	now_hash = (str)((hashlib.sha512((str(s).encode('utf-8'))+((password).encode('utf-8')))).hexdigest())

	if (user and (user.password==now_hash)):
		return ('signed in', 200, {'Content-Type': 'application/json'})
	return('not signed in')



@app.route('/api/signup', methods=['GET', 'POST'])
def signup():
	form = UserForm()
	pw = form.password.data

	s = 0
	for char in pw:
		a = ord(char) #ASCII
		s = s+a #sum of ASCIIs acts as the salt
	hashed_password = (str)((hashlib.sha512((str(s).encode('utf-8'))+((pw).encode('utf-8')))).hexdigest())

	user = User(name=form.username.data, password = hashed_password)
	db.session.add(user)
	db.session.commit()
	print (user)
	if user:
		return ('', 200)
	return ('', 400)


@app.route('/webhook', methods = ['GET', 'POST'])
def webhook():
	data = request.get_json(silent=True, force=True)
	print('Data: '+json.dumps(data, indent=4))

	#req = json.loads(data)
	req = data
	if req['queryResult']['action'] == "reqSher":
		print('sher action accessed')
		response = sher(data)
		r = jsonify(response)
		r.headers['Content-Type'] = 'application/json'
		return r

	elif ['queryResult']['action']=='reqGhazal':
		print('ghazal action accessed')
		response = ghazal(data)
		r = jsonify(response)
		r.headers['Content-Type'] = 'application/json'
		return r

def sher(data):
	collection = [" 'aasmaan itni bulandi pe jo itraata hai, bhuul jaata hai zameen se hi nazar aata hai' - Waseem Barelvi",
			" 'har shaḳhs dauDta hai yahaan bhiiD ki taraf, phir ye bhi chahta hai use rasta mile' - Waseem Barelvi",
			" 'har-chand e'tibaar mein dhoke bhi hain magar, ye to nahin kisi pe bharosa kiya na jaa.e' - Jaan Nisar Akhtar ", 
			" 'jhuuT vaale kahin se kahin baDh ga.e, aur main tha ki sach bolta reh gaya' - Waseem Barelvi",
			" 'dosti aur kisi gharaz ke liye, vo tijaarat hai dosti hi nahin' - Ismail Merathi"]
	selected = collection[random.randrange(0,5,1)]
	print("\nSelected sher = "+selected)

	data['queryResult']['fulfillmentMessages'] = [{'text': {'text': [selected] }}]
	print("Data in sher fulfillment : \n")
	for i in data:
		print("", i, ":", data[i])
	print('\ntext set for sher')
	return data