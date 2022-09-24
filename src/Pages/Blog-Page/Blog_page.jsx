import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import URL from "../../Variables";
import styles from "./Blog-Page.module.css";
import Markdown from "../../components/Markdown/Markdown";

async function getBlogByid(id) {
	// var uri=
	var res = await fetch(`${URL}/blogs/${id}`);
	res = await res.json();
	return res;
}

export default function Blog_Page(params) {
	const { id } = useParams();
	const [blogData, setblogdata] = useState(null);

	// console.log();
	async function getData() {
		const res = await getBlogByid(id);
		setblogdata(res);
		console.log(res);
	}
	useEffect(() => {
		getData();
	}, []);

	if (!blogData) return <>LOADING</>;

	return (
		<div className={styles.blogPageWrapper}>
			{/* <h1>{blogData.title}</h1>
			<h5>{blogData.createdAt}</h5>
			<p>{blogData.description}</p> */}
			<Markdown data={blogData.blog} />
		</div>
	);
}
