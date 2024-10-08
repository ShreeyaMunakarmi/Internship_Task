<h1> RESTful API for a todo list application </h1>
This project is a <b>TODO list application API</b> built using <b>Node.js</b>, <b>Express</b>, <b>Sequelize</b>, <b>JWT</b> and <b>MySQL</b>. It allows users to manage tasks through user registration, login, and CRUD(Create, Read, Update, Delete) operations on tasks. Each todo list has a title, body, due date and status (completed/pending). It had implemented authentication for the API. It includes proper error handling and input validation. It has successfully managed to integrated testing tools like Postman to validate API endpoints and data flow, ensuring reliable functionality.

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
<pre>
|-config<br>
│   - database.js        **Sequelize database configuration**<br>
|-controllers<br>
│   -authController.js   **Handles user authentication and task management**<br>
|- models<br>
│   - taskDetail.js      **Task model**<br>
│   - user.js            **User model**<br>
|- routes<br>
│   - auth.js             **Authentication and task routes**<br>
|- app.js                 **Express app configuration**<br>
|- server.js              **Entry point for the application**<br>
|- package.json           **Dependencies and scripts**<br>
|-package-lock.json       **Lock file for dependencies**<br>
</pre>pre>

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher)
- **MySQL** (v8.x or higher)

## API Endpoints

### Authentication
<pre>
-POST /auth/register: Register a new user<br>
    -Request Body: { name, email, password }<br>
-POST /auth/login: Log in with an existing account<br>
    -Request Body: { email, password }<br>
    -Requires Content-Type: application/json on the Headers tab<br>
-GET /auth/me: Get logged-in user details<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
</pre>

### Task Management
<pre>
-POST /auth/tasks: Create a new task<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
    -Request Body: { title, body, date }<br>
-GET /auth/tasks: Get a list of tasks (supports pagination)<br>
    -Query Params: page (default: 1), limit (default: 10), status (optional, 0 for in-progress and 1 for completed)<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
-PATCH /auth/tasks/status: Update the status of a task( 0 for in-progress and 1 for completed)<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
    -Request Body: { id, status }<br>
-DELETE /auth/tasks: Delete a task<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
     -Query Params: id<br>
-PATCH /auth/tasks/update<br>
    -Requires JWT token in the Authorization header<br>
    -Requires Content-Type: application/json on the Headers tab<br>
    -Request Body: { id, title, body, date }<br>
</pre>

   
