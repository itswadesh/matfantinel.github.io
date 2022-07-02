const QrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
const WWW_URL = import.meta.env.VITE_WWW_URL || 'https://misiki.tech';
const DOMAIN = import.meta.env.VITE_DOMAIN;
export const VITE_CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const GOOGLE_MAPS_KEY =
	import.meta.env.GOOGLE_MAPS_KEY || 'AIzaSyBIG0jd-iPEfUhwt8tD-Tjxt-yrPFgfRXc';
const HTTP_ENDPOINT = 'https://api.misiki.io';
const HTTP_ENDPOINT_AUTOMATION = 'https://automation.litekart.in';
const CDN_URL = 'https://ik.imagekit.io/3wzatecz51w3i';
export const typingTimeout = 0; // After this delay the search api will be fired
const currency = { symbol: '$', code: 'USD' };
const tokenExpiry = 60 * 60 * 24 * 365; // Login validity in seconds
const ANALYTICS_TRACKING_ID = 'UA-49421899-5';
const sorts = [
	{ name: 'Relevance', val: null },
	{ name: 'Whats New', val: '-createdAt' },
	{ name: 'Price low to high', val: 'localPrice' },
	{ name: 'Price high to low', val: '-localPrice' }
];
const authorInfo = {
	author: 'Misiki',
	entity: 'Misiki',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	siteTitle: 'Misiki',
	siteShortTitle: 'Misiki', // used as SchemaOrg siteTitleAlt
	contactEmail: 'support@misiki.tech',
	facebookAuthorPage: `https://www.facebook.com/codenx`,
	facebookPage: `https://www.facebook.com/codenx`,
	facebookPageName: 'codenx',
	githubPage: 'itswadesh',
	linkedinProfile: 'itswadesh',
	telegramUsername: 'itswadesh',
	twitterUsername: 'itswadesh'
};
const host = 'https://misiki.tech';

const CONTENTFUL_URI = 'https://cdn.contentful.com/spaces/s3lczmsx12pq/environments/master';

export {
	sorts,
	CDN_URL,
	currency,
	tokenExpiry,
	WWW_URL,
	DOMAIN,
	HTTP_ENDPOINT,
	HTTP_ENDPOINT_AUTOMATION,
	ANALYTICS_TRACKING_ID,
	GOOGLE_MAPS_KEY,
	authorInfo,
	host,
	QrCode,
	CONTENTFUL_URI
};
