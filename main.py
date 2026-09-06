"""
FoodTracker - Backend Server
Flask application handling backend logic and serving the FoodTracker prototype.
"""

from flask import Flask, send_from_directory

# Initialize Flask app configured to serve static files from current directory
app = Flask(__name__, static_folder=".", static_url_path="")


@app.route("/")
def index():
    """Serve the frontend index.html."""
    return send_from_directory(".", "index.html")


# Placeholder: Future API routes for managing meals, calories, protein intake,
# and junk food consumption will be implemented here.

if __name__ == "__main__":
    app.run(debug=True, port=5000)
