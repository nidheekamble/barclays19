from api.models import Stocks, News, User, Favourites
from api import app, db
from flask import Flask, session, request, send_from_directory, jsonify
from sqlalchemy import or_, and_
from sqlalchemy.orm import Session
import json, requests

s1 = Stocks(stockName="Bajaj", stockID="BAJAJ", openPrice=0, wtAvgPrice=0, highPrice=0, lowPrice=0, closePrice=0)
s2 = Stocks(stockName="HDFC", stockID="HDFC", openPrice=0, wtAvgPrice=0, highPrice=0, lowPrice=0, closePrice=0)
s3 = Stocks(stockName="ICICI", stockID="ICICI", openPrice=0, wtAvgPrice=0, highPrice=0, lowPrice=0, closePrice=0)
s4 = Stocks(stockName="TCS", stockID="TCS", openPrice=0, wtAvgPrice=0, highPrice=0, lowPrice=0, closePrice=0)
s5 = Stocks(stockName="Infosys", stockID="INFY", openPrice=0, wtAvgPrice=0, highPrice=0, lowPrice=0, closePrice=0)
db.session.add(s1)
db.session.add(s2)
db.session.add(s3)
db.session.add(s4)
db.session.add(s5)
db.session.commit()

for stock in ['BAJAJ', 'HDFC', 'ICICI', 'TCS', 'INFY']:

	r = requests.get(f"https://newsapi.org/v2/everything?q={stock}&apiKey=b49814b3a46e428d9b99b40c568ef6fc")
	json_obj = r.json()

	for news in json_obj['articles']:
		save_news = News(name = stock, newsURL = news['url'], text = news['description'], title = news['title'])
		db.session.add(save_news)
		db.session.commit()





f1 = Favourites(user_id =1, stock_name="BAJAJ")
f2 = Favourites(user_id =2, stock_name="TCS")
db.session.add(f1)
db.session.add(f2)
db.session.commit()

