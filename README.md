[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19687448&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This project implements a RESTful API using Express.js for managing products, including CRUD operations, middleware implementation, and error handling.

## Features

- RESTful API endpoints for products
- Custom middleware for logging and authentication
- Error handling
- Advanced features like filtering, pagination, and search
- Product statistics

## Setup

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-architectPhilemon.git
cd week-2-express-js-assignment-architectPhilemon
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
PORT=3000
API_KEY=your-secret-api-key
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### Products

- `GET /api/products` - List all products (with pagination)
  - Query parameters:
    - `page` (default: 1)
    - `limit` (default: 10)
    - `category` (optional)

- `GET /api/products/:id` - Get a specific product

- `POST /api/products` - Create a new product
  - Required fields:
    - `name` (string)
    - `description` (string)
    - `price` (number)
    - `category` (string)
    - `inStock` (boolean)

- `PUT /api/products/:id` - Update a product

- `DELETE /api/products/:id` - Delete a product

### Search and Statistics

- `GET /api/products/search` - Search products by name
  - Query parameters:
    - `query` (required)

- `GET /api/products/stats` - Get product statistics

## Authentication

All API endpoints require an API key to be sent in the request headers:

```
X-API-KEY: your-secret-api-key
```

## Error Handling

The API includes comprehensive error handling:

- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid/missing API key)
- 404: Not Found
- 500: Internal Server Error

## Examples

### Create a Product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: your-secret-api-key" \
  -d '{
    "name": "Sample Product",
    "description": "A sample product description",
    "price": 29.99,
    "category": "Electronics",
    "inStock": true
  }'
```

### List Products with Pagination

```bash
curl http://localhost:3000/api/products?page=1&limit=10 \
  -H "X-API-KEY: your-secret-api-key"
```

### Search Products

```bash
curl http://localhost:3000/api/products/search?query=sample \
  -H "X-API-KEY: your-secret-api-key"
```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 