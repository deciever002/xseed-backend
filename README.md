# Full Stack Application Backend with Express, Passport Authentication, and MVC Architecture

Welcome to the documentation for the backend of our full stack application built using Express.js, Passport for authentication, and following the MVC pattern architecture. This backend is responsible for handling user authentication and storing course-related information in a MongoDB database using Mongoose.

Backend Url Link: https://xseed-backend.vercel.app/
Frontend Url Link: https://xseed-frontend-nine.vercel.app/


## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Authentication](#authentication)
  - [Passport](#passport)
  - [User Model](#user-model)
- [API Endpoints](#api-endpoints)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Course Endpoints](#course-endpoints)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Introduction

This backend serves as the backbone of our full stack application, providing authentication features using Passport and handling course-related information using an MVC pattern architecture and a MongoDB database with Mongoose.

## Getting Started

### Installation and Quick Start

1. Clone the repository: `git clone https://github.com/deciever002/xseed-backend.git`
2. Install dependencies: `npm install`
3. Run `npm start` to start the application

### Configuration

1. Rename `.env.example` to `.env`.
2. Configure your environment variables in the `.env` file, including the MongoDB connection string and session secret along with port number.
3. You can set the following variables,
PORT = 8000
SESSION_SECRET = "DevelopedByManas"
CONNECTION_STRING = "your_connection_string"

## Authentication

### Passport

Passport.js is used for authentication. It supports various strategies such as local authentication, OAuth, etc. The `passport.js` file in the `config` directory initializes Passport with the required strategies.

### User Model

The `User` model in the `models` directory defines the structure of user information stored in the MongoDB database. It includes fields such as username, email, password hash, etc.

## API Endpoints

### Authentication Endpoints

- `POST /user/register`: Register a new user.
- `POST /user/login`: Authenticate a user.
- `GET /user/destroy-session`: Log out the currently authenticated user.
- `GET /user/getUser`: Get a particular user from the users list.

### Course Endpoints

- `GET /chapter/getAll`: Get a list of all chapters.
- `GET /chapter/:id`: Get a particular chapter.

## Middleware

The `authenticated.js` file in the `middleware` directory contains custom middleware functions for authentication.

## Error Handling

Error handling middleware is implemented to catch and handle errors that might occur during API requests.

## Contributing

We welcome contributions! If you find any issues or want to add new features, feel free to fork the repository and create a pull request.


---

