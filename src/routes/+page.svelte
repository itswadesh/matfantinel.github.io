

<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import RecentPosts from '$lib/components/home/recent-posts.svelte';
	import Experience from '$lib/components/home/experience.svelte';
	import Projects from '$lib/components/home/projects.svelte';
	import WhatCanIBuild from '$lib/components/home/what-can-i-build.svelte';
	import UseCases from '$lib/components/home/use-cases.svelte';

	export let posts;
</script>

<div class="container">
	<Hero />
	<About />
	<WhatCanIBuild />

	<div style="display:flex; justify-content:space-between;">
		<a href="/ecommerce-business-use-cases" class="button secondary" style="margin-right:1rem;">
			Use Cases
		</a>
		<a href="/industries-i-serve" class="button primary"> Industries </a>
	</div>
	<!-- <br />
	<UseCases title="ECOMMERCE BUSINESS USE CASES" data={useCases} />
	<br />
	<UseCases title="For Industries" data={industries} /> -->
	<br />
	<br />
	<br />
	<Projects />
	<br />
	<br />
	<br />
	<Experience />
	<br />
	<br />
	<br />
	<RecentPosts {posts} />
</div>
