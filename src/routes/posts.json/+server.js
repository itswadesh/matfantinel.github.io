import { CONTENTFUL_URI, VITE_CONTENTFUL_ACCESS_TOKEN } from '$lib/config';
import readingTime from 'reading-time';

export async function GET() {
	const postsRes = await (
		await fetch(
			`${CONTENTFUL_URI}/entries?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}&content_type=blog&include=2`
		)
	).json();
	postsRes.items.map((post) => {
		post.readingTime = readingTime(post.fields.content.content).text;
	});
	const posts = postsRes.items.slice(0, 4);
	return new Response(JSON.stringify(posts));
}
