# Assignment Project

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)  
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)  
- Git

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/itsnikhil24/Assignment.git
```

### 2. **Change into the project directory**

```bash
cd Assignment
```

---

## ⚙️ Running the Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

> ✅ A sample `.env` file is included in the repo to help you set up the required environment variables.

---

## ⚙️ Running the Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

---

## ✅ Check if the Webpage is Working

Paste this URL into your browser:

```bash
http://localhost:3000/doctors
```

---

## ➕ Add a Doctor

Use **Postman** (or any HTTP client) to send a `POST` request and create a new doctor.

### Endpoint

```
POST http://localhost:3000/doctors/add-doctor
```

### Request Body

Send a JSON payload with at least the required fields:

```json
{
  "name": "Dr. Robert Brown",
  "specialization": "Neurologist",
  "experience": 12,
  "qualifications": ["MBBS", "MD in Neurology", "PhD in Neuroscience"],
  "profileImage": "https://images.pexels.com/photos/31887348/pexels-photo-31887348/free-photo-of-elegant-spring-white-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "rating": 4.7,
  "fee": 2000,
  "cashback": 250,
  "clinic": "Brain Health Clinic",
  "availableIn": "Evening",
  "location": "Chicago, USA",
  "modeOfConsult": ["Online", "Hospital"],
  "languages": ["English", "German"]
}
```
