from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

polls = []

# ✅ This will show a simple text message at http://localhost:5000/
@app.route('/')
def home():
    return "✅ Flask API is working now!", 200

@app.route('/api/polls', methods=['GET'])
def get_polls():
    return jsonify(polls), 200

@app.route('/api/polls', methods=['POST'])
def create_poll():
    data = request.get_json()
    question = data.get('question', '')
    options = data.get('options', [])

    if not question or len(options) < 2:
        return jsonify({'error': 'Invalid input'}), 400

    new_poll = {
        'id': len(polls) + 1,
        'question': question,
        'options': [{'id': i+1, 'text': opt, 'votes': 0} for i, opt in enumerate(options)]
    }
    polls.append(new_poll)
    return jsonify(new_poll), 201

if __name__ == '__main__':
    app.run(debug=True)
