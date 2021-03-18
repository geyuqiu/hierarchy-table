import {Options, Vue} from "vue-class-component";
import ProductService from '@/service/ProductService';
import {IParent} from '@/model/parent.model';

export default class HierarchyTable extends Vue {
	columns: any[] = [];
	products: IParent[] = [];
	productService: ProductService = new ProductService();

	created() {
		this.columns = [
			{field: 'Identification number', header: 'Identification number'},
			{field: 'Name', header: 'Name'},
			{field: 'Gender', header: 'Gender'},
			{field: 'Risk', header: 'Risk'},
			{field: 'Hair length', header: 'Hair length'},
			{field: 'IQ', header: 'IQ'},
			{field: 'Admission date', header: 'Admission date'},
			{field: 'Last breakdown', header: 'Last breakdown'},
			{field: 'Yearly fee', header: 'Yearly fee'},
			{field: 'Knows the Joker?', header: 'Knows the Joker?'},
		];
	}

	mounted() {
		this.productService.getProducts().then((data: any) => {
			data.map((parent: any, index: number) => {
				const item: IParent = parent.data;
				item.id = index;
				this.products.push(item);
			})
		});
	}
}
