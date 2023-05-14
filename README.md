### Nhúng Tailwindcss
```bash
npm install -D tailwindcss
npx tailwindcss init
```

Chỉnh sửa file tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Import thư viện vào file css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```