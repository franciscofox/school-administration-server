# School Administration Server

## Overview
This is a school-administration project designed to manage rooms, students, and related functionalities. The project is divided into frontend and backend components.

- Frontend: [school-administration](https://github.com/franciscofox/school-administration)
- Backend: This repository (school-administration-server)

This repository contains the server-side code for the School Administration project. The server is built using Node.js and Express.js, and it interacts with a PostgreSQL database running in a Docker container. The server provides API endpoints to connect with the client-side of the application, facilitating the administration features. Authentication is implemented with encryption to ensure secure access.

## Tech Stack

### Backend
- [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [PostgreSQL](https://www.postgresql.org/): Open-source relational database.
- [Docker](https://www.docker.com/): Containerization platform for running PostgreSQL locally.

### Authentication
- Encryption is used to ensure secure user authentication.

## Project Structure
The project structure is organized into controllers, models, routes, and the main server file.

- **controllers:** Contains middleware for authentication and controllers for handling specific functionalities related to users, rooms, and students.
- **models:** Defines the database models for Room, Student, and User.
- **routes:** Defines the API routes for handling requests related to users, rooms, and students.
- **database.js:** Configuration file for connecting to the PostgreSQL database.
- **server.js:** Main server file where Express.js is configured and the server is started.

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a PostgreSQL database either locally or using Docker.
4. Configure the database connection in the `database.js` file.
5. Run the server with `npm start`.

## API Endpoints
- **Users:**
  - `/api/users/register` (POST): Register a new user.
  - `/api/users/login` (POST): Authenticate and log in a user.

- **Rooms:**
  - `/api/rooms` (GET): Get all rooms.
  - `/api/rooms/:id` (GET): Get details of a specific room.

- **Students:**
  - `/api/students` (GET): Get all students.
  - `/api/students/:id` (GET): Get details of a specific student.

## Additional Notes
- Ensure that PostgreSQL is running and accessible.
- Update environment variables if needed.
- Contributions and issue reports are welcome.
