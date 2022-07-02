<script>
	export let alt;
	export let src;
	export let figcaption = null;
	let imageSrc;

	$: imageSrc = `${src}`;
</script>

<picture>
	<img src={imageSrc} {alt} loading="lazy" decoding="async" />

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
		}
	}
</style>
