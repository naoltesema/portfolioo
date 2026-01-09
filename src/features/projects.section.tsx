import { CarpenterIcon } from "@/Icons";
import Button from "@/primitives/button";
import { Icon } from "@/primitives/icon";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectsSection() {
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

	return (
		<section className="flex flex-col gap-5 container">
			<div className="flex gap-2">
				<h1 className="font-black text-gray-text-secondary text-2xl md:text-3xl lg:text-4xl uppercase">
					Projects
				</h1>
				<CarpenterIcon />
			</div>
			<div className="flex gap-6 overflow-x-auto scroll-m-4">
				{featuredProjects.map((project) => (
					<ProjectPreview key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}

export default ProjectsSection;

function ProjectPreview({ project }: { project: Project }) {
	const IconComponent = project.icon;
	return (
		<div className="flex gap-10 bg-[url(/background.png)] bg-repeat bg-center p-6 pt-14 border-4 rounded-3xl min-w-[400px]">
			<ProjectsDescription project={project} />
			{IconComponent && <IconComponent />}
		</div>
	);
}

function ProjectsDescription({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-14">
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap">
						{project.title}
					</h3>
					<p className="max-w-[30ch] text-gray-text-secondary">
						{project.description}
					</p>
				</div>
				<div className="flex flex-col gap-1.5">
					<h4 className="font-bold text-gray-text-secondary md:text-1xl text-lg lg:text-2xl">
						Technologies
					</h4>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="flex justify-center items-center bg-green-elevation-3 px-1.5 py-0.5 border border-green-border rounded-md font-bold text-green-text-primary text-xs"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="flex items-center gap-4">
				{project.downloadUrl && (
					<a
						href={project.downloadUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							className={
								"flex items-center justify-center rounded-full px-4 py-2 bg-green text-background"
							}
						>
							Download
						</Button>
					</a>
				)}
				{project.githubUrl && (
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<Icon name="Github" />
					</a>
				)}
			</div>
		</div>
	);
}
