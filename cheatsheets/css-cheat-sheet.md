# 🎨 CSS Cheat Sheet (The Skin)

CSS is used to make your HTML look **beautiful**.

### 📦 The Box Model
- `padding`: Space **inside** the box.
- `margin`: Space **outside** the box.
- `border`: The outline of the box.

### 🚀 Layout (Flexbox)
Flexbox is how we center things.
```css
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;    /* Center vertically */
  gap: 1rem;              /* Space between items */
}
```

### 🌈 Themes (CSS Variables)
```css
:root {
  --primary-color: #3b82f6;
}

h1 {
  color: var(--primary-color);
}
```

### ✨ Modern Effects
- `border-radius: 12px;`: Rounded corners.
- `box-shadow: 0 4px 6px rgba(0,0,0,0.1);`: Add depth.
- `transition: all 0.3s ease;`: Smooth animations.
