<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Image from '../base/image.svelte';
	import Tag from '../base/tag.svelte';
</script>

<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="Following are some of the projects out of 800+. Technologies are varied and so are their purposes. Some of them are open source!"
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="svelte-commerce" alt="Svelte Commerce" />
					</div>
					<div slot="content">
						<div class="title">
							Svelte Commerce
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/itswadesh/svelte-commerce"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">
							Svelte Powered enterprise grade eCommerce Storefront.
							<!-- <a
								class="project-post-button button secondary-light transparent"
								href="/blog-development-sveltekit"
							>
								Read blog post
							</a> -->
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Svelte</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="foodfire" alt="Foodfire" />
					</div>
					<div slot="content">
						<div class="title">
							Foodfire
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/itswadesh/foodfire"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://foodfire.info/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A light weight food commerce webapp made using flutter and vue

							<!-- <a
								class="project-post-button button secondary-light transparent"
								href="/ionic-animal-crossing-companion"
							>
								Read blog post
							</a> -->
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vue</Tag>
							<Tag>Firebase</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="tablez" alt="tablez" />
					</div>
					<div slot="content">
						<div class="title">
							Tablez
							<div class="links">
								<a
									class="text-secondary"
									href="https://tablez.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Complete ecommerce tech stack built from scratch for the commerce giant Lulu
							International
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vue</Tag>
							<Tag>PWA</Tag>
							<Tag color="secondary">NodeJs</Tag>
							<Tag color="secondary">MongoDB</Tag>
							<Tag color="secondary">Flutter</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>

			<ThreeByThreeGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="clicky" alt="clicky" />
					</div>
					<div slot="content">
						<div class="title">
							Clicky
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://clicky.pk"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://clicky.pk/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Mobile app, website and admin panel for the fashion ecommerce venture from Amazon
							named Clicky
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vue</Tag>
							<Tag>React Native</Tag>
							<Tag color="secondary">MongoDB</Tag>
							<Tag color="secondary">NodeJS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="lrnr" alt="Lrnr" />
					</div>
					<div slot="content">
						<div class="title">
							LrNr
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://github.com/itswadesh/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://lrnr.in/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							The emerging ed-tech platform for school students growing very fast.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vue</Tag>
							<Tag>Svelte</Tag>
							<Tag color="secondary">Flutter</Tag>
							<Tag color="secondary">Mongo</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<Image path="projects" filename="misiki" alt="Misiki" />
					</div>
					<div slot="content">
						<div class="title">
							Misiki
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://github.com/itswadesh/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://misiki.io/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Ecommerce SAAS built over enterpise grade technology that scales to infinity while
							maintaining best speed and user experience
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vue</Tag>
							<Tag>Node</Tag>
							<Tag color="secondary">Flutter</Tag>
							<Tag color="secondary">Mongo</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<Image path="projects" filename="atoz" alt="Atoz" />
					</div>
					<div slot="content">
						<div class="title">
							AtoZ
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://github.com/itswadesh/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://atozzones.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Yelp Clone + Super APP with services like Movie Ticket booking, Hotel booking, Flight
							booking,
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Sveltekit</Tag>
							<Tag>Node</Tag>
							<Tag color="secondary">Flutter</Tag>
							<Tag color="secondary">Mongo</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<Image path="projects" filename="Frontendfun" alt="Frontendfun" />
					</div>
					<div slot="content">
						<div class="title">
							Frontendfun
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://github.com/itswadesh/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://frontendfun.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							For fresher programmers to take reference from world's best open source projects.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Sveltekit</Tag>
							<Tag>Node</Tag>
							<Tag color="secondary">Automation</Tag>
						</div>
					</div>
				</Card>
				<Card>
					<div slot="image">
						<Image path="projects" filename="shopnx" alt="ShopNx" />
					</div>
					<div slot="content">
						<div class="title">
							ShopNx
							<div class="links">
								<!-- <a
									class="text-secondary"
									href="https://github.com/itswadesh/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a> -->

								<a
									class="text-secondary"
									href="https://shopnx.in/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Automation project for youtube influencers to manage their products and promote sales.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Sveltekit</Tag>
							<Tag>Node</Tag>
							<Tag color="secondary">Automation</Tag>
						</div>
					</div>
				</Card>
			</ThreeByThreeGrid>
		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
