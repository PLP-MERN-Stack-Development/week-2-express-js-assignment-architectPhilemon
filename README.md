[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19687448&assignment_repo_type=AssignmentRepo)
# Express.js Products API

A RESTful API built with Express.js for managing products. This project implements CRUD operations for a products database with authentication and logging middleware.

## Features

- CRUD operations for products
- In-memory data storage
- Authentication middleware
- Request logging
- Error handling
- Security best practices

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-architectPhilemon.git
cd week-2-express-js-assignment-architectPhilemon
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example`
   - Generate JWT secret and API key using the provided scripts:
```bash
node generate-secret.js
node generate-api-key.js
```

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Root Endpoint

- `GET /` - Welcome message and available endpoints

## Request & Response Examples

### GET /api/products

Response:
```json
[
    {
        "id": "uuid",
        "name": "Sample Product 1",
        "price": 29.99,
        "description": "This is a sample product"
    }
]
```

### POST /api/products

Request:
```json
{
    "name": "New Product",
    "price": 49.99,
    "description": "A new product description"
}
```

Response:
```json
{
    "id": "generated-uuid",
    "name": "New Product",
    "price": 49.99,
    "description": "A new product description"
}
```

## Error Handling

The API includes comprehensive error handling:
- 404 for resources not found
- 500 for server errors
- Appropriate status codes for various error conditions

## Security

- Environment variables for sensitive data
- API key authentication
- JWT support
- `.gitignore` configured for sensitive files

## Running the Server

Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## Testing

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

## Project Structure

```
├── server.js              # Main application file
├── .env                   # Environment variables (not in repo)
├── .env.example           # Example environment variables
├── .gitignore            # Git ignore file
├── generate-secret.js     # JWT secret generator
├── generate-api-key.js    # API key generator
└── src/
    ├── middleware/       # Middleware functions
    │   ├── logger.js    # Request logging
    │   └── auth.js      # Authentication
    └── routes/          # Route handlers
        └── products.js  # Products routes
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is part of a coding assignment and is for educational purposes. 