# MyHealthCare

MyHealthCare is a web application designed to help users manage their healthcare needs conveniently and efficiently. Users can book appointments with trusted doctors, manage their health records, and get personalized healthcare recommendations.

## Features

- **Book Appointments**: Schedule appointments with a network of trusted healthcare professionals.
- **Manage Health Records**: Keep track of your medical history and health records.
- **Personalized Recommendations**: Get tailored healthcare recommendations and reminders.
- **Secure Payments**: Make secure payments for healthcare services.

## Project Structure

```
.vscode/
    settings.json
Backend/
    .env
    package.json
    server.js
    .vscode/
        extensions.json
        settings.json
    config/
        cloudinary.js
        mongodb.js
    controllers/
        adminController.js
        authController.js
        doctorController.js
        paymentController.js
        userController.js
    middlewares/
        adminAuth.js
        ...
    models/
        ...
    routes/
    uploads/
vite-project/
    .env
    .gitignore
    eslint.config.js
    index.html
    note
    package.json
    postcss.config.js
    README.md
    tailwind.config.js
    vite.config.js
    public/
    src/
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/myhealthcare.git
    ```

2. Navigate to the project directory:
    ```sh
    cd myhealthcare
    ```

3. Install dependencies for the backend:
    ```sh
    cd Backend
    npm install
    ```

4. Install dependencies for the frontend:
    ```sh
    cd ../vite-project
    npm install
    ```

## Running the Project

1. Start the backend server:
    ```sh
    cd Backend
    npm run dev
    ```

2. Start the frontend development server:
    ```sh
    cd ../vite-project
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the `Backend` directory and add the following environment variables:

```
PORT=3002
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password145
USER_EMAIL=user@example.com
USER_PASSWORD=123456
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
```

Create a `.env` file in the `vite-project` directory and add the following environment variable:

```
VITE_API_BASE_URL=http://localhost:3002
```

## License

This project is licensed under the MIT License.