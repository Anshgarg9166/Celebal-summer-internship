This is a secure RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that allows basic **CRUD operations** on users with **JWT-based authentication**. All user routes are protected and require a valid token to access.

---

## 🚀 Features

- ✅ User Registration (`/api/auth/register`)
- ✅ User Login with JWT Token (`/api/auth/login`)
- ✅ Secure Token-based Authentication using JWT
- ✅ Protected CRUD routes:
  - Get All Users
  - Get Single User by ID
  - Create a New User
  - Update a User
  - Delete a User
- 🛡️ Passwords are hashed using bcrypt
- 🧪 Tested using Postman

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **Security**: bcrypt.js

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/user-crud
JWT_SECRET=your_jwt_secret_key
```

> Replace `your_jwt_secret_key` with a strong secret key of your choice.

### 4. Run the server

```bash
node server.js
```

Server should start at: [http://localhost:5000](http://localhost:5000)

---

## 🔐 API Authentication

All endpoints under `/api/users` are **protected** and require a valid **JWT token**.

---

## 📬 API Endpoints

### ✅ Register a New User

```
POST /api/auth/register
```

#### Request Body:

```json
{
  "name": "Ansh Garg",
  "email": "ansh@example.com",
  "password": "securepassword",
  "age": 21
}
```

---

### ✅ Login (Get JWT Token)

```
POST /api/auth/login
```

#### Request Body:

```json
{
  "email": "ansh@example.com",
  "password": "securepassword"
}
```

#### Response:

```json
{
  "token": "your.jwt.token"
}
```

---

### 🔒 Use JWT in Protected Routes

Include this header in all `/api/users` requests:

```
Authorization: Bearer your.jwt.token
```

---

### 🔒 Protected CRUD Routes

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get user by ID    |
| POST   | `/api/users`     | Create new user   |
| PUT    | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |

> All routes require a valid JWT in the `Authorization` header.

---

## 🛠 Project Structure

```
.
├── server.js
├── .env
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── middleware/
│   └── authMiddleware.js
├── package.json
└── README.md
```

---

## 🧪 Testing with Postman

1. Register or login to get a JWT token.
2. Use the token in `Authorization` header as:
   ```
   Bearer your.jwt.token
   ```
3. Call any `/api/users` endpoint with the token.

---

## ⚠️ Notes

- All passwords are securely hashed with bcrypt before storing in the DB.
- JWT tokens are valid for **1 hour** by default.
- Use tools like Postman or Thunder Client to test endpoints easily.

---

## ✨ Author

**Ansh Garg**

Made with ❤️ and Node.js 🚀
