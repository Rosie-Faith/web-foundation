# JWT Authentication Flow

JWT (JSON Web Token) is commonly used to authenticate users when accessing an API.

## How it works

1. The user sends their login details to the server.
2. The server verifies the user's credentials.
3. If the credentials are correct, the server creates and signs a JWT.
4. The server sends the JWT to the client.
5. The client sends the JWT with future requests using:
   `Authorization: Bearer <token>`
6. Authentication middleware verifies the JWT.
7. If the token is valid, the request continues.
8. If the token is missing or invalid, the server returns `401 Unauthorized`.

## Simple diagram

Client
  |
  | Login credentials
  v
Server
  |
  | Verify credentials
  v
JWT issued
  |
  | Token sent to client
  v
Client
  |
  | Authorization: Bearer <token>
  v
JWT verification middleware
  |
  +---- Valid ----> Protected endpoint
  |
  +---- Invalid --> 401 Unauthorized