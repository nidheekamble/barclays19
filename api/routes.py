from api import app, db
from flask import request
import time
import hashlib
from sqlalchemy import or_, and_
from sqlalchemy.orm import Session
from flask_login import login_user, current_user, logout_user, login_required, UserMixin
from flask import Flask, session, render_template, url_for, flash, redirect, request, send_from_directory, jsonify
from api.forms import UserForm, LoginForm
from api.models import User, Stocks, Favourites
import os, dialogflow, json, pusher, requests

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
	req = data

	if req['queryResult']['action'] == "showFavourites":
		print('showFavourites identified')
		response = showFavourites(data)

		#### TRIAL 1, TRIAL 2, TRIAL 3
		# r = jsonify(response)
		# print ("\nRESPONSE\n")
		# for i in response:
		# 	print("", i, ":", response[i])
		# r.headers['Content-Type'] = 'application/json'
		# return r


	elif ['queryResult']['action']=='showGraph':
		print('showGraph identified')
		response = showGraph() # confirm redirection to site?
		r = jsonify(response)
		print ("\nRESPONSE\n")
		for i in response:
			print("", i, ":", response[i])
		r.headers['Content-Type'] = 'application/json'
		return r


def showFavourites():

	favourites = retrieveFavourites()
	return favourites
	
	######### TRIAL 1 

	# favourites = retrieveFavourites()
	# data['queryResult']['fulfillmentMessages'] = [{'text': {'text': favourites }}]
	# print("Fulfillment for showing favourites : \n")

	# for i in data:
	# 	print("", i, ":", data[i])

	# print('\nEOF\n')
	# return data


	######### TRIAL 2

	# data['queryResult']['fulfillmentMessages'] = [{'text': {'text': ["pqr"] }}]
	# return data


	######### TRIAL 3

	#favourites = retrieveFavourites()
# 	responseId = data['responseId']
# 	queryText = data['queryResult']['queryText']
# 	action = data['queryResult']['action']
# 	favList = data['queryResult']['parameters']['favList']
# 	allRequiredParamsPresent = data['queryResult']['allRequiredParamsPresent']
# 	#fulfillmentText = favourites
# 	fulfillmentText = 'something'
# 	name = data['queryResult']['intent']['name']
# 	displayName = data['queryResult']['intent']['displayName']
# 	intentDetectionConfidence = data['queryResult']['intentDetectionConfidence']
# 	languageCode = data['queryResult']['languageCode']
# 	payload = data['originalDetectIntentRequest']['payload']
# 	session = data['session']

# 	print ('\nData set\n')
# 	return {
#   "responseId": responseId,
#   "queryResult": {
#     "queryText": queryText,
#     "action": action,
#     "parameters": {
#       "favList": [
#         favList
#       ]
#     },
#     "allRequiredParamsPresent": allRequiredParamsPresent,
#     "fulfillmentText": "dddd" ,
#     "fulfillmentMessages": [
#       {
#         "text": {
#           "text": [
#             "dddd" 
#           ]
#         }
#       }
#     ],
#     "intent": {
#       "name": name,
#       "displayName": displayName
#     },
#     "intentDetectionConfidence": intentDetectionConfidence,
#     "languageCode": languageCode
#   },
#   "originalDetectIntentRequest": {
#     "payload": payload
#   },
#   "session": session
# }




@login_required
def showGraph():

	print('show graph here')
	# add more here later
	return ''


@login_required
def showNews():

	print('retrieve news')
	return ''


@login_required
def addFavourites(stock_name):

	print('adding favourites')
	userStockPair = Favourites(user_id = current_user.id, stock_name = stock_name)
	db.session.add(userStockPair)
	db.session.commit()

	print(userStockPair)
	return ('', 200)


def retrieveFavourites():

	print('retrieving favourites')
	userStockPair = Favourites.query.filter_by(user_id = current_user.id).all()
	favourites = []
	for pair in userStockPair:
		favourites.append(pair.stock_name)

	print(favourites)
	return favourites


@login_required
def stockName(name_substr):

	stockList = Stock.query.all()
	similarStocks = []
	for stock in stockList:
		if (stock.stockName.find(name_substr) != (-1)):
			similarStocks.append(stock.stockName)

	print(similarStocks)
	return jsonify(similarStocks)


@login_required
def news():

	favourites = retrieveFavourites()
	# adding later
	return ('', 200)


