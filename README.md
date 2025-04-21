
---

## ⚙️ Technologies Used

- **Frontend**: Next.js, React, Socket.IO-client
- **Backend**: Express.js, Socket.IO, MongoDB, Mongoose, JWT
- **Database**: MongoDB
- **Auth**: JWT-based simple login
- **UI**: CSS with class-based styling

---

## 🚀 Setup Instructions

### 📌 Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- npm or yarn

---

### 🔧 Backend Setup

```bash
cd backend
npm install
node server.js

 ### Frontend Setup

cd frontend
npm install
npm run dev




## 🧱 Architecture & Design Decisions

### 🔄 Frontend (Next.js + React)

- Built using **Next.js** for rapid frontend development and routing.
- Simple authentication using username only for demo purposes.
- Uses **Socket.IO-client** for real-time messaging.
- Maintains chat state in-memory (`useState`) and connects to Socket.IO on load.
- Messages are fetched via API (`/api/messages`) for persistence.
- UI is minimal and responsive using basic CSS classes.

### 🖥️ Backend (Node.js + Express + Socket.IO)

- Express handles REST API routes for login and message history.
- **Socket.IO** enables bi-directional real-time communication.
- All messages are stored in **MongoDB**, modeled using Mongoose.
- AI responses are simulated with a delay, but structure allows real LLMs (like OpenAI) to be plugged in easily.
- JWT-based auth ensures protected message routes and basic session management.

### 🔐 Security & Session

- Users receive a JWT on login which is stored in `localStorage`.
- Auth middleware protects sensitive endpoints.
- Minimal validation is done for simplicity but easily extendable.

### 📈 Scalability & Extensibility

- Code is modular and ready for scaling (e.g., Socket.IO adapters with Redis).
- MongoDB provides horizontal scalability for storing chat history.
- Easily extendable to support:
  - Group chat
  - Real AI integration
  - User registration
  - Chat encryption
  - Notification system

---

## 📦 Future Improvements

- ✅ AI-powered responses using OpenAI API
- ✅ Enhanced error handling and form validation
- ✅ Better auth flow with registration and password
- ✅ Deploy backend to Render / frontend to Vercel
- ✅ Add unit tests and integration tests

