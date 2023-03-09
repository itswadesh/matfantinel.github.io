
export async function load({ fetch, url }) {
	const id = url.searchParams.get('id');
	const url1 = `/index.json?id=${id}`;
	const res = await fetch(url1);
	if (res.ok) {
		return {
			post: await res.json()
		};
	} else {
		return {
			error: new Error(`Could not load ${url}`)
		};
	}
}
