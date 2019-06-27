from flask_login import UserMixin
from api.__init__ import login_manager, db

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(int(user_id))
	

class User(db.Model, UserMixin):
	__tablename__ = 'User'
	id = db.Column(db.Integer, primary_key = True)
	name = db.Column(db.String(30), nullable = False)
	password = db.Column(db.String(128), unique = False, nullable = False)

	def __repr__(self):
		return f"User('{self.id}', '{self.name}', '{self.password}')"

class Stocks(db.Model, UserMixin):
	__tablename__ = 'Stocks'
	stockName = db.Column(db.String, unique = True, nullable = False)
	stockID = db.Column(db.String, unique = True, nullable = False)
	openPrice = db.Column(db.Integer, unique = False, nullable = False)
	wtAvgPrice = db.Column(db.Integer, unique = False, nullable = False)
	highPrice = db.Column(db.Integer, unique = False, nullable = False)
	lowPrice = db.Column(db.Integer, unique = False, nullable = False)
	closePrice = db.Column(db.Integer, unique = False, nullable = False)

	def __repr__(self):
		return f"Stocks('{self.openPrice}', '{self.wtAvgPrice}', '{self.highPrice}', '{self.lowPrice}', '{self.closePrice}')"

class Favourites(db.Model, UserMixin):
	__tablename__ = 'Favourites'
	user_id = db.Column(db.Integer, db.ForeignKey(User.id))
	stock_name = db.Column(db.String, db.ForeignKey(Stocks.stockName))

	def __repr__(self):
		return f"Favourites('{self.user_id}', '{self.stock_id}')"