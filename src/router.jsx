import { createBrowserRouter } from "react-router";
import App from "./App";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				path: "",
				Component: HomePage,
			},
			{
				path: "/about",
				Component: AboutPage,
			},
			{
				path: "/services",
				Component: ServicesPage,
			},
			{
				path: "/portfolio",
				Component: PortfolioPage,
			},
			{
				path: "/blog",
				Component: BlogPage,
			},
			{
				path: "/blog/:id",
				Component: BlogDetailsPage,
			},
			{
				path: "/contact",
				Component: ContactPage,
			},
		],
	},
	{
		path: "*", // 404 page
		Component: ErrorPage,
	},
]);
