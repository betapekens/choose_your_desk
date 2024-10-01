from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load desk data from JSON file
def load_desks():
    if os.path.exists('desks.json'):
        with open('desks.json', 'r') as f:
            return json.load(f)
    return []

# Save desk data to JSON file
def save_desks(desks):
    with open('desks.json', 'w') as f:
        json.dump(desks, f)

# Desk map page
@app.route('/')
def desk_map():
    desks = load_desks()  # Load desks for each request
    return render_template('map.html', desks=desks)

# Book or unbook a desk by ID and name
@app.route('/toggle_desk', methods=['POST'])
def toggle_desk():
    desk_id = request.json.get('desk_id')
    action = request.json.get('action')
    user_name = request.json.get('user_name', '')
    desks = load_desks()  # Reload desks from file
    for desk in desks:
        if desk['id'] == int(desk_id):  # Ensure desk_id is correctly handled as int
            if action == 'book' and not desk['booked']:
                desk['booked'] = True
                desk['user_name'] = user_name  # Save the user's name
                save_desks(desks)  # Save updated desks back to file
                return jsonify({"success": True, "message": f"Desk {desk_id} successfully booked by {user_name}!"})
            elif action == 'unbook' and desk['booked']:
                desk['booked'] = False
                desk['user_name'] = ''  # Clear the user's name
                save_desks(desks)  # Save updated desks back to file
                return jsonify({"success": True, "message": f"Desk {desk_id} successfully unbooked!"})
            return jsonify({"success": False, "message": f"Desk {desk_id} is already {'booked' if action == 'book' else 'available'}."})
    return jsonify({"success": False, "message": "Desk not found."})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
