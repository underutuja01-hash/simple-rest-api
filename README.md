# Simple REST API
# Simple REST API

A simple REST API built using Node.js and Express.js for managing notes.

## Features

- Get all notes
- Get a note by ID
- Add a new note
- Update a note
- Delete a note

## Technologies Used

- Node.js
- Express.js
- Postman
- Git & GitHub

## Installation

Clone the repository:

git clone https://github.com/underutuja01-hash/simple-rest-api.git

Install dependencies:

npm install

Start the server:

node server.js

The API runs at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /notes | Get all notes |
| GET | /notes/:id | Get a note by ID |
| POST | /notes | Add a new note |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## Example POST Request

{
  "title": "Third Note",
  "content": "Testing POST API"
}

## Testing

The API endpoints were tested using Postman, including GET, POST, PUT, and DELETE requests.

## Project Status

Completed and tested successfully.
