// components/TestimonialsSection.tsx

const testimonials = [
	{
		name: "Alex Johnson",
		text: "Booking with AeroVista was a breeze! The whole process was seamless.",
	},
	{
		name: "Samantha Lee",
		text: "I found the best deals for my trip to Japan. Highly recommended!",
	},
	{
		name: "Michael Chen",
		text: "An amazing experience from start to finish. I'll definitely be using them again.",
	},
	{
		name: "Jessica Garcia",
		text: "The user interface is beautiful and so easy to navigate.",
	},
	{
		name: "David Kim",
		text: "Finally, a travel site that looks as good as the destinations it offers.",
	},
];

// Duplicate the testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
	return (
		<section className="py-20 w-full overflow-hidden">
			<h2 className="text-4xl font-bold text-center mb-12">
				What Our Travelers Say
			</h2>
			<div className="relative flex overflow-hidden">
				<div className="marquee-content">
					{duplicatedTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-80 mx-4 p-6 bg-gray-800 rounded-lg shadow-lg"
						>
							<p className="text-gray-300">
								"{testimonial.text}"
							</p>
							<p className="mt-4 font-bold text-right text-blue-400">
								- {testimonial.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
