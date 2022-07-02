<script>
	import Card from '$lib/components/base/card.svelte';
	import LazyImage from '$lib/components/base/lazyimage.svelte';
	import Tag from './tag.svelte';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let post;
	export let showImage = true;
</script>

{#if post}
	<Card url={`/${post.fields.slug}?id=${post.sys.id}`}>
		<div slot="image">
			{#if showImage}
				<LazyImage src={post.fields.banner} alt="Cover Image" />
			{/if}
		</div>
		<div slot="content">
			<div class="title">{post.fields.title}</div>
			<div class="note">{post.readingTime}</div>
			<div class="text">{@html documentToHtmlString(post.fields.content).substring(0, 150)}</div>
		</div>
		<div slot="footer">
			{#if post.metadata.tags}
				<div class="tags">
					{#each post.metadata.tags.slice(0, 2) as tag}
						<Tag>{tag.sys.id}</Tag>
					{/each}
				</div>
			{/if}
		</div>
	</Card>
{/if}
