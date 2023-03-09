import type { ExperienceEntry } from "$lib/utils/types";

const careerStart = new Date(2014, 8, 22);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
		{
			id: 'arialshop',
			title: 'Arialshop',
			jobTitle: 'Ecommerce',
			timeframe: '2014 ~ 2018',
			link: 'https://codecanyon.net/item/progressive-single-page-ecommerce-app-using-vuejs/20596887',
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
			link: 'https://codecanyon.net/item/vue-fullstack-automation-database-crud-generator-using-vuejs-nodejs-mongodb/24263858',
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
	] as ExperienceEntry[];
