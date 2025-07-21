// components/HeroSection.tsx

"use client";

import { motion } from "framer-motion";
import Globe from "./Globe";

const HeroSection = () => {
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	} as const;

	return (
		<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Globe />
				<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
			</div>

			<motion.div
				className="relative z-10 text-center px-4"
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.3 } },
				}}
			>
				<motion.h1
					className="text-5xl md:text-7xl font-extrabold text-white"
					variants={textVariants}
				>
					Discover Your Next Adventure
				</motion.h1>
				<motion.p
					className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
					variants={textVariants}
				>
					AeroVista makes booking your dream vacation simple,
					seamless, and unforgettable.
				</motion.p>
				<motion.button
					className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
					variants={textVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Explore Destinations
				</motion.button>
			</motion.div>
		</section>
	);
};

export default HeroSection;
