# 🍬 Sweet Shop Backend Documentation

## 📡 API Endpoints

### 🔹 Auth

| Method | Endpoint              | Access | Description           |
|--------|----------------------|--------|---------------------|
| POST   | `/api/auth/register`  | Public | Register a new user |
| POST   | `/api/auth/login`     | Public | Login and get token |

---

### 🔹 Sweets

| Method | Endpoint               | Access | Description             |
|--------|-----------------------|--------|------------------------|
| POST   | `/api/sweets`          | Admin  | Create a new sweet     |
| GET    | `/api/sweets`          | Public | Get all sweets         |
| GET    | `/api/sweets/search`   | Public | Search sweets by query |
| PUT    | `/api/sweets/:id`      | Admin  | Update sweet details   |
| DELETE | `/api/sweets/:id`      | Admin  | Delete a sweet         |

---

### 🔹 Inventory

| Method | Endpoint                    | Access | Description                  |
|--------|----------------------------|--------|------------------------------|
| POST   | `/api/sweets/:id/purchase`  | User   | Purchase sweet (reduce qty)  |
| POST   | `/api/sweets/:id/restock`   | Admin  | Restock sweet (increase qty) |

---

## 🤖 Use of AI 
-AI Assistance was used in writing boilerplate code and documentation, while all project-specific logic (business rules, schema, and workflows) were designed and implemented manually.
-AI also refined README and code formatting for clarity.
