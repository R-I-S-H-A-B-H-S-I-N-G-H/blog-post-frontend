import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Blog_Page from "./Pages/Blog-Page/Blog_page";
import Blogs from "./Pages/Blogs/Blogs";
import CreateBlog from "./Pages/create-Blog/CreateBlog";
import Home from "./Pages/Home";
function App() {
	return (
		<div className="app-wrapper">
			<SkeletonTheme>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/blogs/new" element={<CreateBlog />} />
					<Route path="/blogs/:id" element={<Blog_Page />} />
				</Routes>
			</SkeletonTheme>
		</div>
	);
}

export default App;
