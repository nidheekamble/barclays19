from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, IntegerField, RadioField, BooleanField, PasswordField, SubmitField, TextAreaField, SelectField, HiddenField, DateField
from wtforms.validators import DataRequired, Length, ValidationError
from api.models import User


class UserForm(FlaskForm):
	username = StringField('Name', validators = [DataRequired(), Length(max = 30)])
	password = PasswordField('Password', validators = [DataRequired()])
	submit = SubmitField('Done')

class LoginForm(FlaskForm):
	username = StringField('Name', validators = [DataRequired(), Length(max = 30)])
	password = PasswordField('Password', validators=[DataRequired()])
	submit = SubmitField('Login')