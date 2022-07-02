<script>
	import Card from '$lib/components/base/card.svelte';
	import LazyImage from '$lib/components/base/lazyimage.svelte';
	import Tag from './tag.svelte';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let post;
	export let showImage = true;

	function limitWords(textToLimit, wordLimit) {
		var finalText = '';
		var text2 = textToLimit.replace(/\s+/g, ' ');
		var text3 = text2.split(' ');
		var numberOfWords = text3.length;
		var i = 0;
		if (numberOfWords > wordLimit) {
			for (i = 0; i < wordLimit; i++) finalText = finalText + ' ' + text3[i] + ' ';
			return finalText + '…';
		} else return textToLimit;
	}
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
			<div class="text">{@html limitWords(documentToHtmlString(post.fields.content), 23)}</div>
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
