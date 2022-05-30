from flask import Flask
from flask_restx import Api, Resource 

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import true

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://sa:@VIZEN5822511@BikeStores'
db = SQLAlchemy(app)

api = Api(app)

class Stores(db.Model):
    store_id = db.Column(db.Integer, primary_key=True)
    store_name = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(25), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    street = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(10), nullable=False)
    zip_code = db.Column(db.String(5), nullable=False)


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return Stores.query.all()

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=80)  