import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import URL from "../../Variables";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Create-Blog.css";
import Header from "../../components/Header/Header";

// markdown imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Markdown from "../../components/Markdown/Markdown";

export default function CreateBlog() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [blog, setBlog] = useState("");

	async function submitdata() {
		if (title.length === 0 || description.length === 0 || blog.length === 0)
			return;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: title,
				description: description,
				blog: blog,
			}),
		};
		console.log(blog);
		var res = await fetch(`${URL}/blogs/new`, requestOptions);
		console.log(res.status);
		const statuscode = res.status;
		res = await res.json();

		if (statuscode === 200) navigate(`/blogs/${res._id}`);
		// console.log(res);
	}

	useEffect(() => {}, []);

	return (
		<div className="createnew-blog-wrapper">
			<h1>Create New Blog</h1>
			<div className="createnew-blog">
				<label>
					Title
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						name="Title"
					/>
				</label>
				<label>
					Description
					<textarea
						className="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type="text"
						name="Description"
					/>
				</label>
				<label>
					Blog
					<textarea
						className="blog"
						value={blog}
						onChange={(e) => {
							setBlog(e.target.value);
							// console.log(e.target.value);
						}}
						type="text"
						name="Blog"
					/>
					<Markdown data={blog} />
				</label>
				<button onClick={() => submitdata()} className="submit-blog">
					Submit
				</button>
			</div>
		</div>
	);
}
