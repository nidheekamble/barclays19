from flask_login import UserMixin
from api.__init__ import login_manager, db

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(int(user_id))
	
@login_manager.user_loader
def load_org(org_id):
	return User.query.get(int(org_id))

class User(db.Model, UserMixin):
	__tablename__ = 'User'
	id = db.Column(db.Integer, primary_key = True)
	name = db.Column(db.String(30), nullable = False)
	about = db.Column(db.String(120), unique = False, nullable = False)
	password = db.Column(db.String(128), unique = False, nullable = False)

	def __repr__(self):
		return f"User('{self.id}', '{self.name}', '{self.about}', '{self.password}')"