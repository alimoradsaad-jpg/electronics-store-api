# Electronics Store API

A RESTful API for an Electronics Store built using Node.js, Express.js, MongoDB, and Mongoose.

---

## Features

- Category Management
- Product Management
- Shopping Cart
- Order Creation
- Order Status Update
- RESTful API
- JSON Responses

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

---

## Project Structure

```
src/
│── config/
│── controllers/
│── models/
│── routes/
│── app.js

server.js
package.json
README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/alimoradsaad-jpg/electronics-store-api.git
```

Go to the project folder

```bash
cd electronics-store-api
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/electronics_store
```

---

## Run the Project

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

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

---

## GitHub Repository

Repository Link:

https://github.com/alimoradsaad-jpg/electronics-store-api

---

## Author

Ali Morad Saad

Level 4 Project