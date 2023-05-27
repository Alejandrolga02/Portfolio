/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary': '#00171f',
				'terciary': '#023e8a',
				'accent': '#48cae4',
				'secondary': '#240046',
				'secondary-accent': '#5a189a'
			},
			minHeight: {
				'screen': 'calc(100vh - 3rem)'
			}
		},
	},
	plugins: [],
}

