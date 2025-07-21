// components/DestinationsSection.tsx

"use client";

import { motion } from "framer-motion";
import { Card3D } from "./Card3D";

// Import your images - make sure to place them in the public folder
import parisImg from "../public/paris.jpg";
import tokyoImg from "../public/tokyo.jpg";
import maldivesImg from "../public/maldives.jpeg";

const destinations = [
	{
		title: "Paris, France",
		description: "The city of love and lights.",
		image: parisImg,
	},
	{
		title: "Tokyo, Japan",
		description: "A vibrant blend of tradition and modernity.",
		image: tokyoImg,
	},
	{
		title: "Maldives",
		description: "Sun-kissed beaches and turquoise waters.",
		image: maldivesImg,
	},
];

const DestinationsSection = () => {
	return (
		<section className="py-20 px-4 w-full">
			<motion.h2
				className="text-4xl font-bold text-center mb-12"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				Popular Destinations
			</motion.h2>
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{destinations.map((dest, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
					>
						<Card3D {...dest} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default DestinationsSection;
