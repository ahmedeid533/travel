// tailwind.config.ts

import type {Config}
from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: { // Add this animation
				marquee: "marquee 25s linear infinite"
			},
			keyframes: { // And these keyframes
				marquee: {
					"0%": {
						transform: "translateX(0%)"
					},
					"100%": {
						transform: "translateX(-100%)"
					}
				}
			}
		}
	},
	plugins: []
};
export default config;
