import MotionDivWrapper from "@/features/motion.div.wrapper";
import ProjectsSection from "@/features/projects.section";
import SkillsSection from "@/features/skills.section";
import ContactSection from "@/features/contact.section";
import { Link } from "react-router-dom";
import Button from "@/primitives/button";

export default function HomePage() {
	return (
		<MotionDivWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className="flex flex-col gap-10"
		>
			<div className="bg-gray-elevation-2">
				<div className="bg-[url(/background.png)] bg-repeat bg-center pt-6 pb-10">
					<SkillsSection />
				</div>
			</div>
			<ProjectsSection />
			<div className="flex justify-center container">
				<Link to="/projects">
					<Button
						className={
							"flex items-center justify-center rounded-full px-6 py-3 bg-green text-background font-bold"
						}
					>
						View All Projects
					</Button>
				</Link>
			</div>
			<ContactSection />
		</MotionDivWrapper>
	);
}

