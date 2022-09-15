import { useEffect, useState } from "react";
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
	return <>home</>;
}

export default Home;
