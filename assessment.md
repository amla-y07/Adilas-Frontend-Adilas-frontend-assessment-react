# ✍️ Frontend Take-Home Assignment

## 🎯 Objective

Build a basic **Event Management Dashboard** using the provided starter template. You are expected to make engineering decisions and complete missing functionality.

## ✅ Requirements

### 1. Event Dashboard Page

- Display a list of events.
- Show: Title, Date, Status, and Registration Count. This dependes the API of your choice
- Add sorting or filtering by status (e.g., Upcoming, Past) and persist the query on the URL.

### 2. Event Detail Page

- View details for a selected event (`/event/:id`).
- Display: Title, Date, Description, and Registrations. This dependes the API of your choice

### 3. Create Event Page

- Add a form to create a new event.
- Fields: Title, Description, Date, and Status. This also dependes the API of your choice
- Perform validation and show errors.

### 4. API Integration

- Replace `/api/events` with a working fetch from `http://localhost:3001/events` if you prefer to use `json-server` or use a mock api of your choice `eg. https://dummyjson.com `.
- Add error handling and loading states.

---

## 🔍 Evaluation Criteria

| Area                | Expectation                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Code Quality**    | Clean, modular, readable, and type-safe                                                                          |
| **UI/UX**           | Responsive, accessible, and user-friendly                                                                        |
| **Problem Solving** | Thoughtful decisions in unclear situations                                                                       |
| **Testing**         | Write at least 2 tests using a tool of your choice                                                               |
| **Optional Bonus**  | Convert the structure to a feature based architecture where each feature(dashboard, event) become self-contained |

---

## 📦 Additional Context

- You are free to:
  - Add or refactor components
  - Use any form library/ prefereably react-hook-form or write custom validation
  - Choose how you persist new events (mock or memory)

---

## 🧠 Things to Consider

- Make assumptions where the spec is vague — explain them if needed.
- Think like a senior: tradeoffs, maintainability, and developer experience matter.
- You can use tools like `json-server`, `react-hook-form`, `react-query`, etc., if justified.

---

## 🕐 Time Expectation

This test is designed to take **4–6 hours**. Please don't over-engineer. Just show your **approach, thinking, and quality**.

---

## 📬 Submission

- Push your code to a GitHub repo (public or invite-only)
- Include a short `NOTES.md` explaining:
  - How to run the app
  - Decisions made
  - Tradeoffs or improvements you'd do with more time

```

```
