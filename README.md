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

