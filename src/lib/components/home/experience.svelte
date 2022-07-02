<script>
	import Card from '$lib/components/base/card.svelte';
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte';
	import Tag from '../base/tag.svelte';
	import Blobs from '../layout/blobs.svelte';

	const careerStart = new Date(2006, 8, 1);
	const yearsOfExperience = Math.abs(
		new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
	);

	const entries = [
		{
			id: 'arialshop',
			title: 'Arialshop',
			jobTitle: 'Ecommerce',
			timeframe: '2014 ~ 2018',
			link:
				'https://codecanyon.net/item/progressive-single-page-ecommerce-app-using-vuejs/20596887',
			description:
				'Complete Ecommerce Platform built using the Javascript Fullstack. Just download and use with lifetime license.',
			tags: [
				{
					color: 'primary',
					text: 'Vue'
				},
				{
					color: 'secondary',
					text: 'NodeJS'
				},
				{
					color: 'secondary',
					text: 'MongoDB'
				}
			]
		},
		{
			id: 'vuefull',
			title: 'Vuefull',
			jobTitle: 'Programming Automation',
			timeframe: '2017 ~ 2021',
			link:
				'https://codecanyon.net/item/vue-fullstack-automation-database-crud-generator-using-vuejs-nodejs-mongodb/24263858',
			description:
				'Reduce your coding time by automating your javascript fullstack development process (Frontend + Backend).',
			tags: [
				{
					color: 'primary',
					text: 'Vue'
				},
				{
					color: 'secondary',
					text: 'MongoDB'
				},
				{
					color: 'secondary',
					text: 'NodeJS'
				}
			]
		}
		// {
		// 	id: 'sige',
		// 	title: 'SIGE Cloud',
		// 	jobTitle: 'Software Developer',
		// 	timeframe: '2017 ~ 2019',
		// 	description:
		// 		'Built new mobile apps from scratch with Ionic, a simplified desktop ERP with Electron, and modernized the existing Web version by applying the Microfrontends approach.',
		// 	tags: [
		// 		{
		// 			color: 'primary',
		// 			text: 'Angular'
		// 		},
		// 		{
		// 			color: 'primary',
		// 			text: 'Ionic'
		// 		},
		// 		{
		// 			color: 'primary',
		// 			text: 'Electron'
		// 		},
		// 		{
		// 			color: 'secondary',
		// 			text: '.NET'
		// 		},
		// 		{
		// 			color: 'secondary',
		// 			text: 'MongoDB'
		// 		}
		// 	]
		// },
		// {
		// 	id: 'promob',
		// 	title: 'Promob',
		// 	jobTitle: 'Software Developer',
		// 	timeframe: '2014 ~ 2017',
		// 	description:
		// 		'Developed and maintained an internal web app, adding and adapting features to the business needs. Built several APIs used by other dev teams, and integrated them with 3rd-party services.',
		// 	tags: [
		// 		{
		// 			color: 'primary',
		// 			text: 'JQuery'
		// 		},
		// 		{
		// 			color: 'secondary',
		// 			text: '.NET'
		// 		},
		// 		{
		// 			color: 'secondary',
		// 			text: 'SQL'
		// 		}
		// 	]
		// }
	];
</script>

<section id="experience">
	<Section
		align="right"
		title="Envato Projects"
		description="Projects available to purchase on Envato Marketplace."
		buttonUrl="/resume"
		buttonColor="secondary"
	>
		<!-- buttonText="View Resume" -->
		<TwoByTwoGrid>
			{#each entries as entry}
				<Card>
					<div slot="content">
						<div class="title">
							<LowAccentHighlight id={entry.id}>{entry.title}</LowAccentHighlight>
						</div>
						<p>{entry.jobTitle}</p>
						<div class="note">{entry.timeframe}</div>
						<div class="text justify">
							{entry.description}
						</div>
						<br />
						<p class="">
							<a href={entry.link} target="_blank" class="button primary">Download</a>
						</p>
						<br />
					</div>
					<div slot="footer">
						<div class="tags">
							{#each entry.tags as tag}
								<Tag color={tag.color}>{tag.text}</Tag>
							{/each}
						</div>
					</div>
				</Card>
			{/each}
		</TwoByTwoGrid>
	</Section>
	<Blobs minLeft={60} maxTop={30} />
</section>

<style lang="scss">
	:global(#freelancer) {
		--bg-color: var(--freelancer-color);
	}
	:global(#logitix) {
		--bg-color: var(--logitix-color);
	}
	:global(#sige) {
		--bg-color: var(--sige-color);
	}
	:global(#promob) {
		--bg-color: var(--promob-color);
	}
</style>
