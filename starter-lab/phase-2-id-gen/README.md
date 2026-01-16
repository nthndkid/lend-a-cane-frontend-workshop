# 🪪 Phase 2: Dynamic ID Generator (Step-by-Step)

Follow along as we use Tailwind CSS to build a modern card and fetch real data!

---

### 1️⃣ The Card Content (HTML)
Inside `<div id="id-card">`, let's add the image and the user's basic info:
```html
<img id="user-image" src="" class="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg">
<h2 id="user-name" class="text-2xl font-black mt-4 uppercase">User Name</h2>
<p id="user-role" class="text-blue-500 font-bold uppercase tracking-widest text-sm">Software Engineer</p>

<div class="mt-6 pt-6 border-t border-gray-100 text-left space-y-2">
    <p class="text-sm">🆔 ID: <span id="user-id" class="font-bold">...</span></p>
    <p class="text-sm">📧 Email: <span id="user-email" class="font-bold">...</span></p>
    <p class="text-sm">📍 Location: <span id="user-location" class="font-bold">...</span></p>
</div>
```

### 2️⃣ The Action Button (HTML)
Add the button in the bottom center container:
```html
<button id="generate-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all active:scale-95">
    Generate New ID
</button>
```

### 3️⃣ The Fetching Logic (JS)
Open `script.js`. We will walk through:
- How to `fetch` data from our `data.json`.
- How to pick a random user and update the HTML using `document.getElementById`.

### 🚀 Bonus Challenge: "Data Search"
Feeling adventurous? Try adding a **Search Bar**!
- **Goal**: Add an `<input>` field and a "Search" button. When clicked, it should find a specific person in the `data.json` by their name or role.
- **Hint**: Use the `.find()` or `.filter()` methods in JavaScript to look through the users array.

---

> **Stuck?** Check out `solution-vault/phase-2-id-gen` for the finished code!
