# Desk Booking Application

## Introduction

This Desk Booking Application is a web-based system designed to manage desk reservations in an office environment. It provides a visual interface for users to view available desks, book a desk, and unbook their reservations.

## Features

- Interactive desk map
- Desk booking and unbooking functionality
- User name input for desk reservations
- Responsive design for various screen sizes

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Python (Flask framework)
- Database: [Specify your database, e.g., SQLite, PostgreSQL]

## Installation

1. Clone the repository:
   ```
   git clone [your-repository-url]
   cd [your-project-directory]
   ```

2. Set up a virtual environment (recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up your database (if applicable).

5. Configure your environment variables (if any).

## Usage

1. Start the Flask development server:
   ```
   flask run
   ```

2. Open a web browser and navigate to `http://localhost:5000` (or the appropriate URL if you've configured it differently).

3. You should see the desk map. Click on an available desk to book it.

4. To unbook a desk, click on a booked desk and confirm the unbooking.

## Project Structure

- `app.py`: The main Flask application file
- `templates/`: Contains HTML templates
  - `index.html`: The main page template
- `static/`: Contains static files
  - `style.css`: Main stylesheet
  - `script.js`: JavaScript file for desk map creation
  - `booking.js`: JavaScript file for booking functionality