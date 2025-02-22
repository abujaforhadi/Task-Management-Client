# Task Management Application

A modern, real-time task management application with Firebase Authentication, drag-and-drop functionality, and instant syncing using MongoDB.

## 🚀 Live Demo
[Task Management App](https://taskbd-297c8.web.app)

## 📌 Features
- 🔐 **Authentication**: Secure login with Firebase (Google Sign-In).
- 📝 **Task Management**:
  - Add, edit, delete, and reorder tasks.
  - Drag-and-drop tasks between "To-Do," "In Progress," and "Done."
  - Changes persist instantly in the database.
- 🔄 **Real-time Updates**:
  - Uses WebSockets or MongoDB Change Streams to sync tasks instantly.
  - Optimistic UI updates for a smooth user experience.
- 🎨 **Modern UI**:
  - Built with Vite.js + React.
  - Responsive design for both desktop and mobile.
- 🌙 **Bonus Features** (if implemented):
  - Dark mode toggle.
  - Task due dates with color indicators.
  - Activity log tracking changes.

## 🛠 Tech Stack
### Frontend:
- Vite.js + React
- Firebase Authentication
- React Beautiful DnD (or alternative drag-and-drop library)
- Tailwind CSS (or preferred styling approach)

### Backend:
- Node.js + Express.js
- MongoDB (via Mongoose)
- WebSockets / Change Streams for real-time updates

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone  https://github.com/abujaforhadi/Task-Management-Client.git
cd task-management-app
```

### 2️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
MONGO_DB_URI=your_mongodb_uri

```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

### 4️⃣ Backend Setup
```sh
cd backend
npm install
node server.js
```

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/tasks` | Add a new task |
| `GET` | `/tasks` | Retrieve all tasks for the logged-in user |
| `PUT` | `/tasks/:id` | Update a task (title, description, category) |
| `DELETE` | `/tasks/:id` | Delete a task |

## 📜 Folder Structure
```
/task-management-app
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│── .env
│── package.json
```

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
