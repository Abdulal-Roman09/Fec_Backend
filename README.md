# 🏡 FEC Backend - Club Management System

**FEC Backend** is a backend service for a modern **club management system** of **Faridpur Engineering College**, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It powers the core functionalities of the platform such as user authentication, club management, and API endpoints for the frontend.

---

## 📁 Project Structure

```bash
FEC Backend-server/
├── src/
│   ├── config/         # Database connection & environment configs
│   ├── controllers/    # Business logic & request handlers
│   ├── middlewares/    # Authentication, error handling, etc.
│   ├── models/         # Mongoose schemas and models
│   ├── routes/         # API routes
│   ├── app.js          # Express application setup
│   └── index.js        # Entry point of the backend server
├── .env                # Environment variables (not committed)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # Project documentation

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abdulal-Roman09/Fec_Backend
cd FEC Backend-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env
```

Edit the `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### 4. Run the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will start at:  
👉 `http://localhost:8000`

---

## 📦 Available Scripts

| Command       | Description                   |
| ------------- | ----------------------------- |
| `npm run dev` | Run server with nodemon (dev) |
| `npm start`   | Run server in production mode |
| `npm test`    | Run test suite (if available) |

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication tokens
- **bcryptjs** – Password hashing
- **cors** – Cross-origin resource sharing
- **dotenv** – Environment variables

---

## 🔐 API Features

### Authentication & Users

- User registration & login
- JWT-based authentication
- Protected routes
- User profile management

### Property Management

- Create, read, update, delete properties
- Property search and filtering
- Image upload support
- Property categories and types

### Advanced Features

- Favorites system
- Property reviews and ratings
- Advanced search with filters
- Pagination support

---

## 🧭 Future Enhancements

- 📊 Admin dashboard APIs
- 📍 Location-based search
- 💬 Real-time chat system
- 📱 Push notifications
- 💳 Payment integration
- 📈 Analytics and reporting
- 🔍 Advanced search with AI recommendations

---

## 👨‍💻 Development Team - **clubHanger**

| Role           | Name / GitHub Profile                                |
| -------------- | ---------------------------------------------------- |
| 👨‍💻 Core Member | [Abdul Al Roman](https://github.com/Abdulal-Roman09) |

---


## 🌿 Team Workflow & Branching Strategy

To maintain code quality and avoid conflicts, **every team member must work on feature branches**.

### 🪄 Step-by-Step Development Guide:

1. **Always start with the latest main branch:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a new feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes and commit:**

   ```bash
   git add .
   git commit -m "feat: add property search functionality"
   # Use conventional commit messages:
   # feat: for new features
   # fix: for bug fixes
   # docs: for documentation
   # style: for formatting
   # refactor: for code refactoring
   ```

4. **Push your branch to GitHub:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request (PR):**

   - Go to GitHub repository
   - Create PR from your branch to `main`
   - Add description of changes
   - Request review from team members

6. **After PR approval:**
   - Team lead will merge the PR
   - Delete the feature branch

### 🔄 Sync Your Local Repository:

```bash
# Fetch latest changes from main
git fetch origin

# Rebase your feature branch
git checkout feature/your-feature-name
git rebase origin/main

# Resolve any conflicts if they occur
```

---

## 🐛 Issue Reporting

Found a bug? Please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 🌐 Project Links

- **Backend Repository:** [https://github.com/Abdulal-Roman09/Fec_Backend](https://github.com/Abdulal-Roman09/Fec_Backend)
- **Frontend Repository:** [https://github.com/Abdulal-Roman09/Fec_Club_Hub_Client](https://github.com/Abdulal-Roman09/Fec_Club_Hub_Client)
- **API Deployment:** [https://fec-backend.vercel.app/](https://fec-backend.vercel.app/)
- **Frontend Application:** [https://github.com/Abdulal-Roman09/Fec_Club_Hub_Client](https://github.com/Abdulal-Roman09/Fec_Club_Hub_Client)

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create your feature branch
3. Follow the coding standards
4. Add tests if applicable
5. Submit a pull request

---

💡 **FEC Backend** — Building the future of college club management, one line of code at a time.

---

