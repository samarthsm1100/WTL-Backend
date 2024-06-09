# Pet Reunite - Backend

## Overview
Welcome to the Pet Reunite Platform backend. This platform is designed to help users find their lost pets and reunite them with their owners. The backend is built using Express.js and MongoDB, and it manages two main collections: `pets` and `users`.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Pet Reunite Platform allows users to:
- Upload information about found pets.
- Search for lost pets.
- Communicate with other users to confirm pet details.
- Update the status of pets from "found" to "returned" after a successful reunion.
- View success stories of reunited pets.

## Features
- **User Management**: Users can register and log in to the platform.
- **Pet Information Upload**: Users can upload details of found pets.
- **Search for Lost Pets**: Users can search for pets in the lost pets section.
- **Communication**: Users can contact each other to confirm pet details.
- **Status Update**: Users can mark a pet as returned once it has been reunited with its owner.
- **Success Stories**: Display stories of successfully reunited pets.

## Installation
To set up the backend locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samarthsm1100/WTL-Backend.git
   cd WTL-Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection strings, JWT secret keys, etc.).

4. **Start the server**:
   ```bash
   npm start
   ```

## Usage
Once the server is running, the backend will handle requests related to user registration, pet information management, and status updates. The server interacts with the MongoDB database to store and retrieve data.

## Database Schema
### Users Collection
- `username`: String
- `email`: String
- `name` : String
- `phone` : String
- `address` : String
- `password`: String (hashed)
- `createdAt`: Date

### Pets Collection
- `species`: String
- `breed`: String
- `color` : String
- `address` : String
- `image_url` : String
- `description`: String
- `status`: String (e.g., "found", "returned")
- `owner` : String
- `reportedBy`: ObjectId (references the user who uploaded the pet info)
- `createdAt`: Date
- `updatedAt`: Date

## Error Handling
The backend handles errors using standard HTTP status codes:
- `200 OK`: The request was successful.
- `201 Created`: A new resource was successfully created.
- `400 Bad Request`: The request was invalid or cannot be served.
- `401 Unauthorized`: Authentication failed.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Contributing
We welcome contributions to the Pet Reunite Platform. To contribute, please fork the repository, create a feature branch, and submit a pull request. Make sure your code adheres to the coding standards and includes necessary tests.

## License
The Pet Reunite Platform is licensed under the MIT License. For more information, refer to the [License](LICENSE) file included in the repository.

**Base URL**: `https://wtl-backend.onrender.com`
