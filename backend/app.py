# Import flask and datetime module for showing date and time
from flask import Flask, request, redirect
# from flask_debugtoolbar import DebugToolbarExtension
import datetime, os

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'aj1234'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# debug = DebugToolbarExtension(app)

try:
    prodURI = os.getenv('DATABASE_URL')
    prodURI = prodURI.replace("postgres://", "postgresql://")
    app.config['SQLALCHEMY_DATABASE_URI'] = prodURI

except:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///dallexpress'




# Route for seeing a data
@app.route('/data')
def home():

	return {
		"name": "aj",
		"age": "22"
	}

	
# Running app
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port=5000)
