/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			colors: {
				'card-bg': '#313A48',
				'card-title': '#53FFAA',
				'card-quote': '#CEE3E9',
				line: '#979797',
				hover: '#53FFAA'
			},
			fontFamily: {
				Manrope: [ 'Manrope' ]
			},
			boxShadow: {
				'button-hover': '0px 0px 40px rgba(83, 255, 170, 1)'
			}
		}
	},
	plugins: []
};
