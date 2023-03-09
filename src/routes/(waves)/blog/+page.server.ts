import { CONTENTFUL_URI, VITE_CONTENTFUL_ACCESS_TOKEN } from '$lib/config';

export async function load({ fetch }) {
	const postsRes = await (
		await fetch(
			`${CONTENTFUL_URI}/entries?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}&content_type=blog&include=2`
		)
	).json();
	const items = postsRes.items.map((b) => b.fields);
	if (items) {
		return {
			posts: items
		};
	} else {
		return { posts: [] };
	}
}
