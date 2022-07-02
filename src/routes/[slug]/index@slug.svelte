<script context="module">
	export async function load({ fetch, url }) {
		const id = url.searchParams.get('id');
		const url1 = `/index.json?id=${id}`;
		const res = await fetch(url1);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		} else {
			return {
				props: {
					error: new Error(`Could not load ${url}`)
				}
			};
		}
	}
</script>

<script>
	import CodeBlock from '$lib/components/blog/code-block.svelte';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let post;
</script>

{@html documentToHtmlString(post?.fields?.content)}

<!-- <CodeBlock lang="javascript">

```javascript
  // Use Plausible to track the % of people that have a dark/light mode preference
  if (plausible) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      plausible('Dark Mode Enabled');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      plausible('Light Mode Enabled');
    } else {
      plausible('No Dark/Light Preference');
    }
  }
```
</CodeBlock> -->
