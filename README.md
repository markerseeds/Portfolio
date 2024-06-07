#### Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

```js
const App = () => {
	return <div>App</div>;
};
export default App;
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx

App.jsx

```js
const App = () => {
	return <h1 className="text-7xl font-bold underline">Tailwind project</h1>;
};
export default App;
```

#### Assets

- get assets from "project-assets"
- images from Undraw
  [Undraw Docs](https://undraw.co/)

#### Install More Libraries

```sh
npm i nanoid react-icons
```

#### Useful Tailwind Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)

#### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```

#### Extra Challenge

- setup projects in CMS
