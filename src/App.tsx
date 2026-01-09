import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import BlogsPage from "./pages/blogs";
import BucketListPage from "./pages/bucket-list";
import Footer from "./features/footer";
import HeroSection from "./features/hero.section";
import { ThemeProvider } from "./provider/theme.provider";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-[url(/background.png)] bg-repeat bg-center">
			<header className="container">
				<div>{}</div>
			</header>
			<HeroSection />
			{children}
			<Footer />
		</div>
	);
}

function App() {
	return (
		<ThemeProvider
			attribute="class"
			enableSystem
			disableTransitionOnChange
			defaultTheme="dark"
		>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Layout>
								<HomePage />
							</Layout>
						}
					/>
					<Route
						path="/projects"
						element={
							<Layout>
								<ProjectsPage />
							</Layout>
						}
					/>
					<Route
						path="/blogs"
						element={
							<Layout>
								<BlogsPage />
							</Layout>
						}
					/>
					<Route
						path="/bucket-list"
						element={
							<Layout>
								<BucketListPage />
							</Layout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
