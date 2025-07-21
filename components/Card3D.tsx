// components/Card3D.tsx

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
	title: string;
	description: string;
	image: StaticImageData;
}

export const Card3D = ({ title, description, image }: CardProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		["15deg", "-15deg"]
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		["-15deg", "15deg"]
	);

	const handleMouseMove = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
			className="relative w-full h-80 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900"
		>
			<div
				style={{
					transform: "translateZ(50px)",
					transformStyle: "preserve-3d",
				}}
				className="absolute inset-4 grid place-content-center rounded-xl bg-gray-900 shadow-lg"
			>
				<Image
					src={image}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-xl opacity-40"
				/>
				<div
					style={{ transform: "translateZ(50px)" }}
					className="relative z-10 p-4 text-center"
				>
					<h3 className="text-2xl font-bold text-white">{title}</h3>
					<p className="text-gray-300 mt-2">{description}</p>
				</div>
			</div>
		</motion.div>
	);
};
