module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				stone: {
					100: "hsl(30, 54%, 90%)",
					150: "hsl(30, 18%, 87%)",
					600: "hsl(30, 10%, 34%)",
					900: "hsl(24, 5%, 18%)"
				},
				brown: {
					800: "hsl(14, 45%, 36%)"
				},
				rose: {
					50: "hsl(330, 100%, 98%)",
					800: "hsl(332, 51%, 32%)"
				}
			},
			fontFamily: {
				serif: ["Young Serif", "serif"],
				sans: ["Outfit", "sans-serif"]
			},
			spacing: {
				9: "2.375rem",
				13: "3.25rem",
				15: "3.75rem",
				20: "9.5rem",
				128: "32rem",
				144: "36rem"
			}
		}
	},
	plugins: []
};
