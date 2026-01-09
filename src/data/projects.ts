/**
 * Projects Data
 *
 * To add a new project:
 * 1. Add a new object to the `projects` array below
 * 2. Required fields: id, title, description, technologies
 * 3. Optional fields: downloadUrl, githubUrl, icon, featured
 * 4. Set `featured: true` to show it on the homepage preview
 * 5. For icons, import from @/Icons and pass the component
 *
 * Example:
 * {
 *   id: "my-project",
 *   title: "My Project",
 *   description: "A great project description",
 *   technologies: ["react", "typescript"],
 *   downloadUrl: "https://...",
 *   githubUrl: "https://github.com/...",
 *   icon: MyProjectIcon, // optional
 *   featured: true, // optional, for homepage
 * }
 */

import type { ComponentType } from "react";
import { RuminateProjectSvg } from "@/Icons";

export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	downloadUrl?: string;
	githubUrl?: string;
	icon?: ComponentType;
	featured?: boolean; // For homepage preview
}

export const projects: Project[] = [
	{
		id: "ruminate-journal",
		title: "Ruminate Journal",
		description:
			"Ruminate is a minimalist journaling app that lets you capture your memories in timeline-based format.",
		technologies: ["flutter", "firebase", "Blog"],
		downloadUrl: "#",
		githubUrl: "#",
		icon: RuminateProjectSvg,
		featured: true,
	},
	{
		id: "project-2",
		title: "Project 2",
		description: "Another amazing project description goes here.",
		technologies: ["react", "typescript", "next.js"],
		downloadUrl: "#",
		githubUrl: "#",
		icon: RuminateProjectSvg,
		featured: true,
	},
	{
		id: "project-3",
		title: "Project 3",
		description: "Yet another project with great features.",
		technologies: ["node.js", "postgresql"],
		githubUrl: "#",
	},
	{
		id: "project-4",
		title: "Project 4",
		description: "A cool project description.",
		technologies: ["python", "django"],
		downloadUrl: "#",
	},
	{
		id: "project-5",
		title: "Project 5",
		description: "Another project description.",
		technologies: ["vue", "nuxt"],
		githubUrl: "#",
	},
	{
		id: "project-6",
		title: "Project 6",
		description: "One more project description.",
		technologies: ["svelte", "tailwind"],
	},
];

