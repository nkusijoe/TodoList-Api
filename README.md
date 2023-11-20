# TodoList API

A Node.js API for managing Tasks items with CRUD operations.
Also this project is still under development, anyone can make pull requests and make improvements and push on a different branch

## 🚀 Features

- **Todo Management:** 
    - Create, Read, Update, and Delete Task items.
- **User Authentication:** 
    - Registration, login, and user-specific Task lists.
- **RESTful API:** 
    - Follows RESTful principles for API design.
- **Error Handling:** 
    - Custom error handling for clear error messages.

## 📦 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/nkusijoe/TodoList-Api.git
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
    npm run dev
    ```

## 🔍 Endpoints

### Todos

- **List All Todos:** `GET /api/`
- **View a Todo:** `GET /api/:id`
- **Create a Todo:** `POST /api/createTask`
- **Update a Todo:** `PUT /api/task/:id`
- **Delete a Todo:** `DELETE /api/task/:id`

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
