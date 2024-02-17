import json

from flask import Flask, request

app = Flask(__name__)

@app.route("/action", methods = ["POST", "GET"])
def index():
    print(request.data)
    return json.dumps({"message": "test"}), 200, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    app.run(port = 3001, debug = True)
