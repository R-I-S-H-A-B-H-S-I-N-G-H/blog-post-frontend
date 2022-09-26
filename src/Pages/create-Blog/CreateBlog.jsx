import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import URL from "../../Variables";
import "./Create-Blog.css";

// markdown imports

import Markdown from "../../components/Markdown/Markdown";

export default function CreateBlog() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [blog, setBlog] = useState("");
	const [previewMarkdown, setPreviewMarkdown] = useState(false);

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
			<h1 className="createblog-title">Create New Blog</h1>
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

				<label>Blog</label>
				<div>
					<div className="markdown-btn">
						<button onClick={() => setPreviewMarkdown(!previewMarkdown)}>
							toggle markdown
						</button>
					</div>
					{previewMarkdown ? (
						<div className="markdown-preview">
							<Markdown data={blog} />
						</div>
					) : (
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
					)}
				</div>
				{!previewMarkdown ? (
					<button onClick={() => submitdata()} className="submit-blog">
						Submit
					</button>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
