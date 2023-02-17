import { Routes, Route } from "react-router-dom";

import Page from "./Page";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";

// TODO: Add a 404 page.
function Main() {
	return (
		<Routes>
			<Route
				path="/*"
				element={
					<Page title="Home">
						<Home />
					</Page>
				}
			/>
			<Route
				path="/about"
				element={
					<Page title="About">
						<About />
					</Page>
				}
			/>
			<Route
				path="/blog"
				element={
					<Page title="Blog">
						<Blog />
					</Page>
				}
			/>
		</Routes>
	);
}

export default Main;
