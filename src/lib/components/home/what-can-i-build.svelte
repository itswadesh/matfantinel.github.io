<script>
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Blobs from '$lib/components/layout/blobs.svelte';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import WhatBuildPostCard from '../base/what-build-post-card.svelte';

	let posts = [
		{ fields: { title: 'Programming Automation' } },
		{ fields: { title: 'Business Process Automation' } },
		{ fields: { title: 'Multi Vendor Commerce' } },
		{ fields: { title: 'Multi Store Commerce' } },
		{ fields: { title: 'Hyperlocal Ecommerce' } },
		{ fields: { title: 'E-Learning Solution' } },
		{ fields: { title: 'Affiliate website' } },
		{ fields: { title: 'Dropshipping Store' } },
		{ fields: { title: 'Ecommerce Mobile APP' } },
		{ fields: { title: 'D2C Commerce' } }
	];
</script>

<section id="recent-posts">
	<Section
		title="How may I help you"
		description="I can build any of these prjects within 6 weeks"
		buttonText="View all"
		buttonUrl="/what-can-i-build"
	>
		<TwoByTwoGrid>
			{#each posts as post}
				<WhatBuildPostCard {post} />
			{/each}
		</TwoByTwoGrid>
	</Section>
	<Blobs maxLeft={20} maxTop={5} />
</section>
