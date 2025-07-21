// app/page.tsx

import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<HeroSection />
			<DestinationsSection />
			<TestimonialsSection />

			<footer className="w-full py-8 text-center text-gray-500">
				<p>
					&copy; {new Date().getFullYear()} AeroVista. All rights
					reserved.
				</p>
			</footer>
		</main>
	);
}
