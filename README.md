# Web Projects API

This is a simple RESTful API for storing and retrieving a list of web project items. The API is implemented using Express.

## Usage

To use the API, you can make the following requests:

- `GET /api` - Returns the list of web projects
- `POST /api` - Adds a new web project
- `DELETE /api/:id` - Removes a web project by id
- `PUT /api/:id` - Updates a web project by id

The web project objects have the following properties:

- `id` - A unique identifier for the web project (auto-incremented starting at 1)
- `title` - The title of the web project
- `description` - A brief description of the web project
- `URL` - The URL of the web project

### Example

Here's an example of how you could use the API to add a new web project:

```bash
POST /api
Content-Type: application/json

{
  "title": "My Awesome Web Project",
  "description": "This is my awesome web project",
  "URL": "http://myawesomeproject.com"
}
```
The API will respond with the newly created web project object:

json

{
  "id": 3,
  "title": "My Awesome Web Project",
  "description": "This is my awesome web project",
  "URL": "http://myawesomeproject.com"
}
You can then use the id of the new web project to update or delete it.

Installation
To run the API locally, you'll need to have Node.js installed. Once you have Node.js installed, you can follow these steps:

Clone the repository:

```bash
git clone https://github.com/your-username/web-projects-api.git
```
Install the dependencies:

```bash
cd web-projects-api
npm install
```
Start the server:

```bash
npm start
```
The API will be available at http://localhost:8080/api.
