
// @migration task: Check imports
import { CONTENTFUL_URI, VITE_CONTENTFUL_ACCESS_TOKEN } from '$lib/config';
import readingTime from 'reading-time';

export async function GET({ url }) {
	const id = url.searchParams.get('id');
	const post = await (
		await fetch(`${CONTENTFUL_URI}/entries/${id}?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`)
	).json();
	if (post && post.fields && post.fields.content && post.fields.content.content) {
		post.readingTime = readingTime(post.fields.content.content).text;
	}

	if (post) {
		return new Response(JSON.stringify(post));
	}

	return new Response(undefined, { status: 404 });
}
