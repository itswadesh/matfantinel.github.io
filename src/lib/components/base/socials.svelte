<script>
	import TelegramIcon from '$lib/svg/socials/telegram.svelte';
	import TwitterIcon from '$lib/svg/socials/twitter.svelte';
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import LinkedInIcon from '$lib/svg/socials/linkedin.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
	import Rss from '$lib/svg/rss.svelte';
</script>

<div class="socials">
	<a href="https://t.me/itswadesh" target="_blank" rel="noopener" title="Say Hi on Telegram">
		<TelegramIcon />
	</a>
	<a href="https://twitter.com/itswadesh" target="_blank" rel="noopener" title="Say Hi on Twitter">
		<TwitterIcon />
	</a>
	<a
		href="https://github.com/itswadesh"
		target="_blank"
		rel="noopener"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/itswadesh/"
		target="_blank"
		rel="noopener"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		href="mailto:swadesh@litekart.in"
		target="_blank"
		rel="noopener"
		title="Send an email to swadesh@litekart.in"
	>
		<EmailIcon />
	</a>
	<a href="/rss.xml" target="_blank" rel="noopener" title="Subscribe to my RSS Feed">
		<Rss />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			width: 24px;
			color: var(--text-color);
			fill: var(--text-color);

			&:hover {
				color: var(--link-highlight-color);
				fill: var(--link-highlight-color);
			}
		}
	}
</style>
