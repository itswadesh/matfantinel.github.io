

<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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
