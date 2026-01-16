# 🌊 Tailwind CSS Cheat Sheet (Utility-First)

Tailwind lets you style things directly in your HTML classes.

### 📏 Layout & Spacing
- `flex`, `flex-col`, `items-center`, `justify-center`
- `p-4` (padding), `m-8` (margin), `gap-2`
- `w-32` (width), `h-full` (height)

### 🎨 Colors & Backgrounds
- `text-blue-500` (blue text)
- `bg-slate-900` (dark background)
- `border-white/10` (border with transparency)

### 💎 Effects & Polish
- `rounded-xl` (rounded corners)
- `shadow-2xl` (heavy shadow)
- `backdrop-blur-md` (glassmorphism effect)
- `transition`, `duration-300`, `scale-105`

### 📱 Responsive & Interactive
- `hover:bg-blue-400` (style on hover)
- `active:scale-95` (animation when clicked)
- `md:grid-cols-2` (columns on medium screens)

```html
<div class="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all">
  <h1 class="text-2xl font-black text-slate-900">Hello World</h1>
</div>
```
