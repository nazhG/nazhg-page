/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'sans-serif'],
				'bold': ['Roboto Bold', 'sans-serif'],
				'black': ['Roboto Black', 'sans-serif'],
			},
			screens: {
			  'sm': {'max': '280px'},
			},
		},
	},
	plugins: [],
}
