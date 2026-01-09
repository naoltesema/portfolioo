"use client";
import { useState } from "react";

function ContactSection() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle email submission
		console.log("Email submitted:", email);
	};

	return (
		<section className="container py-6 md:py-10">
			<div className="bg-gray-elevation-2 rounded-3xl py-10 md:py-16 px-4 md:px-8 flex flex-col items-center gap-4 md:gap-6">
				<h2 className="font-black text-3xl md:text-5xl lg:text-6xl text-gray-text-primary-hover text-center">
					Thank you
				</h2>
				<p className="text-gray-text-secondary text-base md:text-lg text-center">
					Don't forget to contact me
				</p>
				<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto px-4 sm:px-0">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="your.email@gmail.com"
						className="bg-gray-elevation-3 border border-gray-elevation-3-border rounded-full px-6 py-3 w-full sm:min-w-[300px] text-gray-text-secondary placeholder:text-gray-text-tertiary focus:border-gray-elevation-3-border-hover"
					/>
					<button
						type="submit"
						className="bg-gray-text-primary-hover text-gray-elevation-2 font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
}

export default ContactSection;

