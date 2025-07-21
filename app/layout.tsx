// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // Import the component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AeroVista | Your Journey Begins",
	description:
		"A stunning travel booking landing page built with Next.js and Framer Motion.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmoothScroll /> {/* Add it here */}
				{children}
			</body>
		</html>
	);
}
