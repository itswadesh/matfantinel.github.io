<script>
	import Card from '$lib/components/base/card.svelte';

	export let post;
</script>

{#if post}
	<Card>
		<div slot="image" />
		<div slot="content">
			<div class="title">{post.fields.title}</div>
			<div class="note" />
			<div class="text" />
		</div>
		<div slot="footer" />
	</Card>
{/if}
