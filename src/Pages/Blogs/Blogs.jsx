import { useEffect, useState } from "react";
import Blog_item from "../../components/Blog_item/Blog_item";
import "./Blogs.css";
import URL from "../../Variables";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

async function getBlogs() {
	const desLen = 200;
	// console.log(URI);
	var res = await fetch(`${URL}/blogs`);
	res = await res.json();
	console.log(res[0]);
	for (var i = 0; i < res.length; i++) {
		if (res[i].description.length > desLen) {
			res[i].description = res[i].description.substring(0, desLen - 3);
			res[i].description = res[i].description.trim() + ".....";
			console.log(res[i].description);
		}
	}
	return res;
}

export default function Blogs() {
	const [blogdata, setblogdata] = useState([]);
	async function setData() {
		var temp = [];
		setblogdata(temp);
		for (var i = 0; i < 10; i++) {
			temp.push({
				blog: null,
				createdAt: null,
				description: null,
				title: null,
				updatedAt: null,
				__v: null,
				_id: null,
			});
		}
		setblogdata(temp);
		const res = await getBlogs();
		setblogdata(res);
	}
	useEffect(() => {
		setData();
	}, []);

	return (
		<div className="blogs-wrapper">
			<div className="create-newblog">
				<Link to="/blogs/new">Create New Blog</Link>
			</div>
			<div className="blog-items">
				{blogdata.map((ele, index) => {
					return (
						<Blog_item
							key={ele._id === null ? index.toString() : ele._id}
							data={ele}
						/>
					);
				})}
			</div>
		</div>
	);
}
