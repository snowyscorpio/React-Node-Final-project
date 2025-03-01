
# Full Stack Project - Node.js & React

This project is a full-stack web application built using **Node.js** for the backend and **React** for the frontend. It follows the guidelines provided while incorporating additional features that enhance functionality, security, and usability.

## Project Overview
This application is based on the final project theme and includes:
- A **React-based frontend (FE)** with a structured component-based architecture.
- A **Node.js-based backend (BE)** using Express.js to handle API requests.
- A **MySQL database (DB)** to store user and application data.
- Secure **authentication and role-based access control**.
- Form validation for user inputs to ensure data integrity.

## Features
### Backend (BE)
- Developed with **Node.js** and **Express.js**.
- Uses **MySQL** for persistent storage.
- Implements **RESTful API routes** for CRUD operations.
- Includes authentication with **hashed passwords**.
- Role-based access control for users and administrators.
- Uses **router modules** for better structure and maintainability.

### Frontend (FE)
- Developed with **React** using a modular component structure.
- Uses **react-router-dom** for navigation.
- Implements **form validation** for user inputs.
- Follows accessibility and responsive design principles.
- Uses **React Hooks** for state management.
- Data fetching is handled with **Axios**.

### Database (DB)
- Implemented with **MySQL**.
- Contains the following tables:
  - **Users**: Stores user details, including `id`, `name`, `username`, `email`, `password_hash`, `role`, `profile_picture`, `created_at`, and `updated_at`.
  - **Orders**: Tracks orders, linked to users, with fields `id`, `user_id`, `user_name`, `product_id`, `product_name`, and `created_at`.
  - **Products**: Stores product information, including `id`, `name`, `description`, `image`, `type`, `detailedDescription`, `instruction`, `stock`, `created_at`, and `updated_at`.
  - **Relationships**:
    - **Users & Orders**: A one-to-many relationship (`users` → `orders`).
    - **Orders & Products**: A many-to-many relationship through the `appears` entity.
    - **Users & Products**: Indirectly related via orders.

## Additional Enhancements
Beyond the basic requirements, the following improvements were made:
- **Enhanced Security**: Additional validation and sanitization of user inputs.
- **Error Handling**: Implemented structured error messages for better debugging.
- **Session Management**: Users remain authenticated across sessions.
- **Modularization**: Code is split into meaningful files for maintainability.
- **Extended User Role Management**: Admins have exclusive access to certain operations.

---

## How to Run

1. **Navigate to the backend directory and install dependencies**:
   ```bash
   cd Back_End/
   npm install
   ```

2. **Start the backend server**:
   ```bash
   npm start
   ```

3. **Navigate to the frontend directory and install dependencies**:
   ```bash
   cd ../Front_End/
   npm install
   ```

4. **Start the frontend application**:
   ```bash
   npm start
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`.

---

## Notes

- This project is designed to demonstrate fundamental skills in React and Node.js.
- The focus is on functionality and project structure; advanced styling can be added as needed.

---

## Acknowledgments

Images were sourced from Pinterest.

---




Have a great day ♡

![CUTECAT](https://github.com/user-attachments/assets/e0a1f793-2aad-4b65-9102-23d40a738d52)


