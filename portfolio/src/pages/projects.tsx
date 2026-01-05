import { CarpenterIcon } from "@/Icons";
import Button from "@/primitives/button";
import { Icon } from "@/primitives/icon";
import MotionDivWrapper from "@/features/motion.div.wrapper";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
	return (
		<MotionDivWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className="flex flex-col gap-10"
		>
			<section className="flex flex-col gap-5 container">
				<div className="flex gap-2">
					<h1 className="font-black text-gray-text-secondary text-2xl md:text-3xl lg:text-4xl uppercase">
						Projects
					</h1>
					<CarpenterIcon />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>
		</MotionDivWrapper>
	);
}

function ProjectCard({ project }: { project: Project }) {
	const IconComponent = project.icon;
	return (
		<div className="flex flex-col gap-10 bg-[url(/background.png)] bg-repeat bg-center p-6 pt-14 border-4 rounded-3xl">
			<ProjectsDescription project={project} />
			{IconComponent && (
				<div className="flex justify-center">
					<IconComponent />
				</div>
			)}
		</div>
	);
}

function ProjectsDescription({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-14">
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg md:text-xl lg:text-2xl">
						{project.title}
					</h3>
					<p className="text-gray-text-secondary">{project.description}</p>
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

