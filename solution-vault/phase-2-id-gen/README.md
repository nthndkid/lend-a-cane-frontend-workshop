# Phase 2: Dynamic ID Generator

Moving beyond static logic, we now connect our UI to the "Outside World" using the Fetch API.

## 🎯 Learning Objectives
- Utility-first styling with **Tailwind CSS**.
- Asynchronous programming with `async/await`.
- Connecting to external APIs (Fetch API).
- Dynamic DOM updates with real-world data.

## 📂 Folder Structure
- `index.html`: The layout styled with Tailwind.
- `script.js`: The logic to fetch and render data.

---

## 🚶 Step-by-Step Guide

### 1. Structure the Card (HTML & Tailwind)
- **CDN Setup**: Add the Tailwind CDN link in your `<head>`.
- **The Container**: Create a full-screen centered container using `min-h-screen`, `flex`, `items-center`, and `justify-center`.
- **The Glass Card**: Create a `div` with a semi-transparent background and `backdrop-filter: blur(10px)`.
- **Placeholders**: Add elements with specific IDs like `user-name`, `user-image`, and `user-email` so we can target them later with JavaScript.

### 2. Fetching the Data (JavaScript)
- **Async Function**: Define an `async function fetchUser()`.
- **The API Call**: Use `await fetch('data.json')` to request our local mock data.
- **Parse JSON**: Convert the response using `await response.json()`.
- **Pick Randomly**: Since our JSON is an array, we pick a random index to simulate a dynamic response.
- **Error Handling**: Use `try...catch` to handle cases where the file might be missing or the server is not running.

---

## 🛠️ Key Concepts

### Tailwind CSS (Utility-First)
Notice how we don't have a `style.css`? That's because Tailwind allows us to style elements directly in the HTML using utility classes like `flex`, `p-8`, `bg-gray-950`, etc.

### Fetch API & Async/Await (Local Mocking)
Even for local files, `fetch` return a Promise. We use `async` and `await` to wait for the data to arrive. This is exactly how you would talk to a real server!
```javascript
async function fetchUser() {
    const response = await fetch('data.json');
    const data = await response.json();
    // Do something with data
}
```

### Why a local JSON?
Fetching from a real API (like RandomUser) is great, but using a local `data.json` teaches students how to:
1. **Mock Responses**: Build frontends before the backend is even ready.
2. **Handle Arrays**: Learn how to pick specific items from a list.
3. **Work Offline**: Great for workshops where Wi-Fi might be spotty!
