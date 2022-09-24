import { Link } from "react-router-dom";
import "./Blog_item.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const datastructure = {
	blog: "<p><code>this is part of code</code></p>\n",
	createdAt: "2022-09-13T18:58:29.264Z",
	description: "sdfsdfdf",
	title: "after markdown code",
	updatedAt: "2022-09-13T18:58:29.264Z",
	__v: 0,
	_id: "6320d2d5318a960a299c88ac",
};

function timestamptodate(d) {
	if (d === null) return null;
	const date = new Date(d);
	return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}
export default function Blog_item(props) {
	if (!props.data) return <>LOADING</>;
	const blogdata = props.data;
	return (
		<div className="blog-item-wrapper">
			<Link
				to={`/blogs/${blogdata._id}`}
				onClick={() => {
					console.log(blogdata._id);
				}}
				className="blog-item-title"
			>
				{blogdata.title || <Skeleton />}
			</Link>
			<p>{timestamptodate(blogdata.createdAt) || <Skeleton />}</p>
			<p className="blog-description">{blogdata.description || <Skeleton />}</p>
			<Link to={`/blogs/${blogdata._id}`}>Read More</Link>
		</div>
	);
}
