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
