# Electronics Store API

A RESTful API for an Electronics Store built with Node.js, Express.js, MongoDB, and Mongoose.

## Features

- Manage Categories
- Manage Products
- Shopping Cart
- Create Orders
- Update Order Status
- REST API
- JSON Responses

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Installation

```bash
npm install
```

## Run Project

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
```

## API Endpoints

### Categories

- GET /api/categories
- POST /api/categories

### Products

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

### Cart

- GET /api/cart
- POST /api/cart
- PUT /api/cart/:productId
- DELETE /api/cart/:productId

### Orders

- POST /api/orders
- GET /api/orders
- GET /api/orders/:id
- PUT /api/orders/:id/status

## Author

Ali Morad Saad