<h1> RESTful API for a todo list application </h1>
This project is a **TODO list application API** built using **Node.js**, **Express**, **Sequelize**, ** JWT** and **MySQL**. It allows users to manage tasks through user registration, login, and CRUD(Create, Read, Update, Delete) operations on tasks. Each todo list has a title, body, due date and status (completed/pending). It had implemented authentication for the API. It includes proper error handling and input validation. It has successfully managed to integrated testing tools like Postman to validate API endpoints and data flow, ensuring reliable functionality.

## Features

- **User Authentication**: Secure user registration and login using **JWT** (JSON Web Tokens).
- **Task Management**: Create, read, update, and delete tasks.
- **Task Status Updates**: Update task statuses (e.g., In Progress, Completed).
- **Pagination**: Retrieve tasks with pagination support.
- **Authorization**: All task management operations are protected by user-specific authorization.
- **Error Handling**: Implemented comprehensive error handling across all endpoints to ensure reliable API responses.

  ## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for building APIs.
- **Sequelize**: ORM for working with the MySQL database.
- **MySQL**: Relational database management system.
- **JWT**: JSON Web Token for securing API endpoints.
- **bcrypt.js**: Library for hashing passwords.
- **CORS**: Middleware for enabling cross-origin requests.
- **Body-parser**: Middleware for parsing incoming request bodies.

## Project Structure

|-config
│   - database.js       # Sequelize database configuration
|-controllers
│   -authController.js  # Handles user authentication and task management
|- models
│   - taskDetail.js      # Task model
│   - user.js            # User model
|- routes
│   - auth.js            # Authentication and task routes
|- app.js                 # Express app configuration
|- server.js              # Entry point for the application
|- package.json           # Dependencies and scripts
|-package-lock.json      # Lock file for dependencies

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher)
- **MySQL** (v8.x or higher)

## API Endpoints

### Authentication
-POST /auth/register: Register a new user
    -Request Body: { name, email, password }
-POST /auth/login: Log in with an existing account
    -Request Body: { email, password }
    -Requires Content-Type: application/json on the Headers tab
-GET /auth/me: Get logged-in user details
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab

### Task Management
-POST /auth/tasks: Create a new task
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab
    -Request Body: { title, body, date }
-GET /auth/tasks: Get a list of tasks (supports pagination)
    -Query Params: page (default: 1), limit (default: 10), status (optional, 0 for in-progress and 1 for completed)
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab
-PATCH /auth/tasks/status: Update the status of a task( 0 for in-progress and 1 for completed)
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab
    -Request Body: { id, status }
-DELETE /auth/tasks: Delete a task
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab
     -Query Params: id
-PATCH /auth/tasks/update
    -Requires JWT token in the Authorization header
    -Requires Content-Type: application/json on the Headers tab
    -Request Body: { id, title, body, date }

   
