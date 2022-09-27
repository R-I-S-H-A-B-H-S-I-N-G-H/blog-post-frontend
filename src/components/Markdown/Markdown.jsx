import { marked } from "marked";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./Markdown.css";

import DOMPurify from "dompurify";

export default function Markdown({ data }) {
	var [markdown, setmarkdown] = useState("");

	useEffect(() => {
		var dirtyHTML = marked(data, {
			breaks: true,
			gfm: true,
			headerIds: true,
			smartypants: true,
		});
		console.log(dirtyHTML);
		// const clean = DOMPurify.sanitize(dirtyHTML);
		// setmarkdown(clean);
		// // setmarkdown(dirtyHTML);
		var config = {
			ADD_TAGS: ["iframe"],
		};
		const clean = DOMPurify.sanitize(dirtyHTML, config);
		setmarkdown(clean);
		// console.log(clean);
	}, [data]);

	function createMarkup(m) {
		return { __html: `${m}` };
	}
	return (
		<div
			className="markdown-body"
			dangerouslySetInnerHTML={createMarkup(markdown)}
		></div>
	);
}
