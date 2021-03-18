import {Options, Vue} from "vue-class-component";
import ProductService from '@/service/ProductService';

export default class HierarchyTable extends Vue {
	columns: any[] = [];
	products: any[] = [];
	productService: ProductService = new ProductService();

	created() {
		this.columns = [
			{field: 'code', header: 'Code'},
			{field: 'name', header: 'Name'},
			{field: 'category', header: 'Category'},
			{field: 'quantity', header: 'Quantity'}
		];
	}

	mounted() {
		this.productService.getProductsSmall().then(data => {
			this.products = data
		});
	}
}
