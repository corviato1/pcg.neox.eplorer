import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
CORS(app)  # Allow frontend requests (CORS policy)

# SQLite Database Configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(BASE_DIR, 'shop.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Card Model
class Card(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(200))
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(200))

# Route: Fetch all cards
@app.route('/cards', methods=['GET'])
def get_cards():
    cards = Card.query.all()
    return jsonify([
        {
            'id': card.id,
            'name': card.name,
            'description': card.description,
            'price': card.price,
            'stock': card.stock,
            'image': card.image
        } for card in cards
    ])

# Route: Add a card
@app.route('/add-card', methods=['POST'])
def add_card():
    data = request.json
    new_card = Card(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        stock=data['stock'],
        image=data['image']
    )
    db.session.add(new_card)
    db.session.commit()
    return jsonify({'message': 'Card added successfully'}), 201

# Ensure database is created at startup
with app.app_context():
    db.create_all()

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
