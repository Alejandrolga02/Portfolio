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
				'primary': '#1f2421',
				'accent': '#80ed99'
			},
			minHeight: {
				'screen': 'calc(100vh - 3rem)'
			}
		},
	},
	plugins: [],
}

