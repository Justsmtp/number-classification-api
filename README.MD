Number Classification API
Project Overview

The Number Classification API is a simple RESTful service that takes an integer and returns its mathematical properties, such as whether it’s prime, perfect, Armstrong, or odd/even. It also computes the digit sum and fetches a fun fact from the Numbers API.
Features

    Classifies numbers based on:
        Prime: Checks if the number is prime.
        Perfect: Determines if the number is a perfect number.
        Armstrong: Identifies Armstrong numbers.
        Even/Odd: Determines if the number is even or odd.
    Computes the sum of digits.
    Fetches a fun fact from the Numbers API.
    Returns structured JSON responses.
    Handles errors and invalid inputs gracefully.

Technology Stack

    Backend: Node.js (Express.js)
    External API: Numbers API
    Deployment: Render, Vercel, or Railway
    Version Control: GitHub

Installation & Setup
Prerequisites

    Node.js (v14 or later)
    npm

Clone the Repository

git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api

Install Dependencies

npm install

Run the Server

npm start

The server will start on http://localhost:3000.
API Endpoints
Classify Number

Endpoint:
GET /api/classify-number?number=<integer>

Query Parameters:

    number (required): The integer to classify.

Sample Request

GET http://localhost:3000/api/classify-number?number=371

Success Response (200 OK)

{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Error Response (400 Bad Request)

{
  "number": "alphabet",
  "error": true
}

Error Handling

    If the input is not a valid integer, the API returns a 400 Bad Request with an error message.
    CORS is enabled to allow cross-origin requests.

Deployment
Deploying to Render (Example)

    Sign up at Render.
    Connect your GitHub repository.
    Create a new Web Service:
        Build Command: npm install
        Start Command: npm start
    Render will provide a public URL after deployment.

Testing
Using Postman

    Open Postman.
    Create a new GET request:
    http://localhost:3000/api/classify-number?number=371
    Hit Send to see the response.

Using Curl

curl http://localhost:3000/api/classify-number?number=371

Contributing

Contributions are welcome! Follow these steps:

    Fork the repository.
    Create a new branch: git checkout -b feature/your-feature-name
    Commit your changes: git commit -m "Add your feature"
    Push to the branch: git push origin feature/your-feature-name
    Open a pull request.

License

This project is licensed under the MIT License.
