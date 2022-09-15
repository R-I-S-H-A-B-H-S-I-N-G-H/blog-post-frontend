import { useEffect, useState } from "react";
import Blog_item from "../../components/Blog_item/Blog_item";
import "./Blogs.css";
import URL from "../../Variables";

async function getBlogs() {
	// console.log(URI);
	var res = await fetch(`${URL}/blogs`);
	res = await res.json();
	// console.log(res);
	return res;
}

export default function Blogs() {
	const [blogdata, setblogdata] = useState([]);
	async function setData() {
		const res = await getBlogs();
		setblogdata(res);
	}
	useEffect(() => {
		setData();
	}, []);
	if (blogdata.length === 0) return <>LOADING</>;
	return (
		<div className="blogs-wrapper">
			<h1 className="blog-heading">Code Blogs</h1>
			<div className="blog-items">
				{blogdata.map((ele) => {
					return <Blog_item key={ele._id} data={ele} />;
				})}
			</div>
		</div>
	);
}
