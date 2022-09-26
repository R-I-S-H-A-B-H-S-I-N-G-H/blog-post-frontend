import { marked } from "marked";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./Markdown.css";

import DOMPurify from "isomorphic-dompurify";

export default function Markdown({ data }) {
	var [markdown, setmarkdown] = useState("");

	useEffect(() => {
		var dirtyHTML = marked(data, {
			breaks: true,
			gfm: true,
			headerIds: true,
			// sanitize: true,
			smartypants: true,ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
		
		// const clean = DOMPurify.sanitize(dirtyHTML);
		// setmarkdown(clean);
		// // setmarkdown(dirtyHTML);
		const clean = DOMPurify.sanitize(marked.parse(dirtyHTML));
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
