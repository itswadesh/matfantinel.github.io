<script>
	export let alt;
	export let path = null;
	export let filename;
	export let figcaption = null;

	let imageSrc;

	$: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`;
</script>

<picture>
	<source srcset="{imageSrc}.png" type="image/png" />
	<source srcset="{imageSrc}.png" type="image/png" />
	<img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />

	{#if figcaption}
		<figcaption>{@html figcaption}</figcaption>
	{/if}
</picture>

<style lang="scss">
	picture {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: left;
		}
	}
</style>
