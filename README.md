# TodoList API

A Node.js API for managing Todo items with CRUD operations.

## 🚀 Features

- **Todo Management:** 
    - Create, Read, Update, and Delete Todo items.
- **User Authentication:** 
    - Registration, login, and user-specific Todo lists.
- **RESTful API:** 
    - Follows RESTful principles for API design.
- **Error Handling:** 
    - Custom error handling for clear error messages.

## 📦 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/TodoList-Api.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd TodoList-Api
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

## 🔍 Endpoints

### Todos

- **List All Todos:** `GET /api/todos`
- **View a Todo:** `GET /api/todos/:id`
- **Create a Todo:** `POST /api/todos`
- **Update a Todo:** `PUT /api/todos/:id`
- **Delete a Todo:** `DELETE /api/todos/:id`

### Authentication

- **User Registration:** `POST /api/register`
- **User Login:** `POST /api/login`

## 📚 Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `mongoose`: ODM for MongoDB and Node.js
- `bcryptjs`: Password hashing
- `jsonwebtoken`: JSON Web Token implementation

## 🔐 Security

- Uses `bcrypt` for hashing passwords.
- JWT for user authentication and route protection.
- Input validation and sanitation.
- Rate limiting and other security best practices.

## 🤝 Contribution

Pull requests are welcome. Please make sure to update tests as appropriate.

## 📜 License

MIT
