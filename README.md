
## Social Media App API Documentation

This is a RESTful API for a simple social media application. It allows users to register, login and perform CRUD operations on posts.

**Base URL:** /api

### Authentication

All endpoints require authentication unless otherwise specified.
Authentication is performed using JWT (JSON Web Tokens).
After successful login, a JWT is returned in the response.
This token should be included in the Authorization header for all subsequent requests.
The token should be prefixed with Bearer, for example:
`Authorization: Bearer your_jwt_token`

### User Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /users/register | Register a new user |
| POST | /users/login | Login an existing user |
| GET | /users | Get all users (admin only) |
| GET | /users/:id | Get a single user by ID (admin only) |

#### Register a New User

**Request Body:**

{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}

**Response Body (Success - 200 OK):**

{
  "username": "your_username",
  "email": "your_email@example.com",
  "_id": "user_id",
  "createdAt": "date_created"
}

#### Login an Existing User

**Request Body:**

{
  "email": "your_email@example.com",
  "password": "your_password"
}

**Response Body (Success - 200 OK):**

{
  "message": "Login successful"
}

### Post Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /posts | Get all posts |
| GET | /posts/:id | Get a single post by ID |
| POST | /posts | Create a new post |
| PUT | /posts/:id | Update an existing post |
| DELETE | /posts/:id | Delete a post |

#### Get All Posts

**Response Body (Success - 200 OK):**

[
  {
    "_id": "post_id_1",
    "title": "Post Title 1",
    "description": "Post Description 1",
  },
  {
    "_id": "post_id_2",
    "title": "Post Title 2",
    "description": "Post Description 2",
  },
]

#### Get Single Post

**Response Body (Success - 200 OK):**

{
  "_id": "post_id",
  "title": "Post Title",
  "description": "Post Description",
}

#### Create New Post

**Request Body:**

{
  "title": "Post Title",
  "description": "Post Description"
}

**Response Body (Success - 201 Created):**

{
    "_id": "post_id",
    "title": "Post Title",
    "description": "Post Description",
}

#### Update Post

**Request Body:**

{
  "title": "Updated Post Title",
  "description": "Updated Post Description"
}

**Response Body (Success - 200 OK):**

{
  "_id": "post_id",
  "title": "Updated Post Title",
  "description": "Updated Post Description",
}

#### Delete Post

**Response Body (Success - 204 No Content)**

### Error Handling

This API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g., a bad request, a user not being found), and codes in the 5xx range indicate an error with our servers.

Here is a list of common error codes you might encounter:

* **400 Bad Request:** The server could not understand the request due to invalid syntax.
* **401 Unauthorized:** Authentication is required to access this resource.
* **403 Forbidden:** You do not have permission to access this resource.
* **404 Not Found:** The requested resource was not found.
* **409 Conflict:** The request could not be completed due to a conflict with the current state of the resource.
* **500 Internal Server Error:** An unexpected error occurred on the server side.

When an error occurs, the API will typically return a JSON response in the following format:

{
  "message": "error message"
}

### Contributing

This project is open source and contributions are welcome. To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new pull request
