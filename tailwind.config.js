/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
	  {
		pattern: /^text-/,
	  },
	  {
		pattern: /^bg-/,
	  },
	  {
		pattern: /^w-/,
	  },
	],
	theme: {
	  extend: {
		colors: {
			lightpink: "#FADAE5",
			pink: "#F9CFDD",
			darkpink: "#FF90BC",
			lightgreen: "#F0F9F8",
			green: "#C6E6E3",
			darkgreen: "#81BFB7",
			black: "#3B4846"
		},
		fontSize: {
			'1xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.75rem',
			'header': '4rem'
		},
	  },
	},
	// important: true,
	plugins: [],
  };
  
