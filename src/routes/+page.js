import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
	const url = '/posts.json?limit=4';
	const res = await fetch(url);

	if (res.ok) {
		return {
			posts: await res.json()
		};
	}

	throw error(500, `Could not load ${url}`);
}
