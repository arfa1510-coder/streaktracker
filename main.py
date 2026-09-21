"""
Fitbees / FoodTracker - Backend Server
Flask application handling API endpoints and serving the prototype.
"""

from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")


@app.route("/")
def index():
    """Serve the frontend index.html."""
    return send_from_directory(".", "index.html")


@app.route("/api/nutrition/summary")
def nutrition_summary():
    """Sample student macro targets and daily nutrition breakdown."""
    return jsonify(
        {
            "target_age_group": "18-22",
            "daily_calorie_target": 2200,
            "daily_protein_target_grams": 120,
            "max_junk_food_percent": 15,
            "hydration_liters": 3.2,
            "status": "success",
        }
    )


@app.route("/api/auth/student-signup", methods=["POST"])
def student_signup():
    """Student sign-up endpoint."""
    data = request.get_json(silent=True) or {}
    email = data.get("email", "student@university.edu")
    goal = data.get("goal", "protein")
    return jsonify(
        {
            "message": f"Welcome {email}! Your fitness journey has begun.",
            "goal": goal,
            "status": "created",
        }
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
