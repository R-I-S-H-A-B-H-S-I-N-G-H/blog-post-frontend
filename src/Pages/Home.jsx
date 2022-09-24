import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import URL from "../Variables";

async function initializeAPI() {
	var res = await fetch(URL);
	res = await res.json();
	console.log(res);
}

function Home() {
	useEffect(() => {
		initializeAPI();
	}, []);
	return (
		<>
			<Link to="/blogs">GO TO BLOGS</Link>
		</>
	);
}

export default Home;
