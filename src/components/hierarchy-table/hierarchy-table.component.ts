import ProductService from '@/service/ProductService';


export default {
	data() {
		return {
			columns: null,
			products: null
		}
	},
	created() {
		// @ts-ignore
		this.productService = new ProductService();

		// @ts-ignore
		this.columns = [
			{field: 'code', header: 'Code'},
			{field: 'name', header: 'Name'},
			{field: 'category', header: 'Category'},
			{field: 'quantity', header: 'Quantity'}
		];
	},

	mounted() {
		// @ts-ignore
		this.productService.getProductsSmall().then(data => {
			// @ts-ignore
			this.products = data
		});
	}
}
