<script>
	import UseCases from '$lib/components/home/use-cases.svelte';

	let industries = [
		'Agriculture Machinery',
		'Ayurvedic Products',
		'Bakery Products',
		'Building Materials',
		'Custom T-shirt',
		'E-learning',
		'Earrings & Fashion Accessories',
		'FMCG',
		'Fruits & Vegetable',
		'Furniture Store',
		'Grocery',
		'Gym & Fitness',
		'Handicraft',
		'Home Appliances',
		'Home Decor',
		'Home Services',
		'Hospitality Services',
		'Inverter & Battery',
		'Jackets',
		'Jewelry',
		'Kids Shoes',
		'Maternity Wear',
		'Medical And Healthcare',
		'Medicines',
		'Merchandise',
		'Milk & Dairy',
		'Musical Instruments',
		'NGO and Charity',
		'Office Supplies',
		'Organic Products',
		'Pet Products',
		'Saree & Lehenga',
		'Security systems',
		'Shapewear',
		'Solar Products',
		'Sporting Goods',
		'T shirt',
		'Travel Accessories',
		'Watches'
	];
</script>

<UseCases title="Industries" data={industries} />
