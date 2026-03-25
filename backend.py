from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    api_key = os.environ.get("OPENAI_API_KEY")
    return jsonify({"reply": f"Echo: {user_message}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

