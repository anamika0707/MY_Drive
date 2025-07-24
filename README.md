MyDrive - Backend Learning Project


📌 Overview
MyDrive is a simple  web application inspired by Google Drive. It was built as a learning project to practice backend development using Node.js, Express, MongoDB, JWT authentication, EJS templating, and cookies. Users can register, log in, upload files, and manage their files securely.

🛠️ Tech Stack
Backend: Node.js, Express.js
Frontend: EJS,Tailwind,Flowbite
Database: MongoDB (Mongoose)
Authentication: JWT (JSON Web Tokens), Cookies

🚀 Features
User Authentication (Register/Login) using JWT and Cookies
File Upload and Storage
User-specific file access
Secure routes using middleware
EJS views for rendering frontend

📚 Learning Outcomes
Gained experience in building a full-stack CRUD application
Implemented secure authentication using JWT and cookies
Learned how to structure an Express.js app with MVC architecture

❗ Note
This project is not production-ready. It was built for educational purposes and does not include advanced error handling, file storage optimizations, or rate-limiting.

# Drive

A simple file upload and user authentication web application built with Node.js, Express, MongoDB, and EJS.

## Features

- User registration and login with hashed passwords
- JWT-based authentication (stored in cookies)
- File upload (UI ready, backend endpoint to be implemented)
- Protected routes (e.g., `/home`)
- EJS templating with Tailwind CSS and Flowbite for UI

## Folder Structure

```
.
├── app.js                # Main application entry point
├── package.json
├── .env                  # Environment variables (not committed)
├── .gitignore
├── config/
│   └── db.js             # MongoDB connection logic
├── middlewares/
│   └── auth.js           # JWT authentication middleware
├── models/
│   ├── files.models.js   # File schema (for uploads)
│   └── user.model.js     # User schema
├── routes/
│   ├── index.routes.js   # Home and main routes
│   └── user.routes.js    # User authentication routes
└── views/
    ├── home.ejs          # Home page (file upload UI)
    ├── index.ejs         # Default index page
    ├── login.ejs         # Login form
    └── register.ejs      # Registration form
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:

    ```sh
    git clone <your-repo-url>
    cd Drive
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the application:

    ```sh
    npm start
    ```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Register a new user at `/user/register`
- Login at `/user/login`
- After login, access the protected `/home` route to see the file upload UI

## Notes

- File upload backend logic is not yet implemented. The UI is ready in `views/home.ejs`.
- Passwords are securely hashed using bcrypt.
- JWT tokens are stored in cookies for authentication.
- MongoDB models are defined in the `models/` directory.

## Scripts

- `npm start` — Starts the server with nodemon



