from flask_login import UserMixin
from api.__init__ import login_manager, db

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(int(user_id))

@login_manager.user_loader
def load_stocks(stocks_id):
	return Stocks.query.get(int(stocks_id))

@login_manager.user_loader
def load_favourites(favourites_id):
	return Favourites.query.get(int(favourites_id))

@login_manager.user_loader
def load_news(news_id):
	return News.query.get(int(news_id))

class User(db.Model, UserMixin):
	__tablename__ = 'User'
	id = db.Column(db.Integer, primary_key = True)
	name = db.Column(db.String(30), nullable = False)
	password = db.Column(db.String(128), unique = False, nullable = False)

	def __repr__(self):
		return f"User('{self.id}', '{self.name}', '{self.password}')"


class Stocks(db.Model, UserMixin):
	__tablename__ = 'Stocks'
	id = db.Column(db.Integer, primary_key=True)
	stockName = db.Column(db.String, nullable = False)
	stockID = db.Column(db.String, nullable = False)
	openPrice = db.Column(db.Integer, unique = False, nullable = False)
	wtAvgPrice = db.Column(db.Integer, unique = False, nullable = False)
	highPrice = db.Column(db.Integer, unique = False, nullable = False)
	lowPrice = db.Column(db.Integer, unique = False, nullable = False)
	closePrice = db.Column(db.Integer, unique = False, nullable = False)

	def __repr__(self):
		return f"Stocks('{self.stockName}', '{self.stockID}', {self.openPrice}', '{self.wtAvgPrice}', '{self.highPrice}', '{self.lowPrice}', '{self.closePrice}')"


class Favourites(db.Model, UserMixin):
	__tablename__ = 'Favourites'
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer)
	stock_name = db.Column(db.String, db.ForeignKey(Stocks.stockName))

	def __repr__(self):
		return f"Favourites('{self.user_id}', '{self.stock_name}')"


class News(db.Model, UserMixin):
	__tablename__ = 'News'
	id =  db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)
	newsURL = db.Column(db.String)
	text = db.Column(db.String)
	title = db.Column(db.String)

	def __repr__(self):
		return f"News('{self.id}', '{self.name}', {self.newsURL}', '{self.text}', '{self.title}')"