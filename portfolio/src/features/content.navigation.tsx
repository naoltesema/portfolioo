"use client";

import { useLocation } from "react-router-dom";
import Navbar from "./content.animation";

export function ContentNavigation() {
	const location = useLocation();
	const page = location.pathname.split("/").slice(0, 2).join("/");

	return (
		<div className="flex gap-4 font-bold">
			<Navbar page={page} />
		</div>
	);
}
