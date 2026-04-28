# 📝 Task Management API

A RESTful API built using Node.js, Express, and MongoDB for managing tasks. It allows users to create, view, and delete tasks. The project follows MVC architecture for better code organization and scalability.

---

## 🚀 Features

- Create a new task
- Fetch all tasks
- Delete a task
- Input validation
- Error handling
- Structured using MVC pattern

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure (MVC)

```
project/
│
├── models/ # Task schema
├── controllers/ # Business logic
├── routes/ # API routes
├── config/ # Database connection
└── server.js # Entry point
```

---

## 🔗 API Endpoints

| Method | Endpoint     | Description        |
|--------|-------------|--------------------|
| POST   | /tasks       | Create a new task  |
| GET    | /tasks       | Get all tasks      |
| DELETE | /tasks/:id   | Delete a task      |

---

## ⚙️ How to Run Locally

```bash
npm install
node server.js
```

Make sure MongoDB is running locally.

---

## 📌 Key Concepts Used

REST API design
MVC architecture
CRUD operations
Middleware usage
Error handling
MongoDB data modeling

---

## 📷 Sample Request (POST /tasks)

```json
{
  "title": "Complete assignment",
  "status": "pending"
}
``` 
---

## 🚧 Future Improvements
Add update task functionality
Add authentication (JWT)
Implement pagination
Add task filtering (completed/pending)
Deploy API on cloud platforms (Render / AWS)

---

## 👩‍💻 Author

Payal Gatkal
GitHub: https://github.com/payalgatkal23