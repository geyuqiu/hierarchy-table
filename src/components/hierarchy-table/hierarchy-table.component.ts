import {Vue} from "vue-class-component";
import ProductService from '@/service/ProductService';
import {IParent} from '@/model/parent.model';
import {IRelative} from '@/model/relative.model';

export default class HierarchyTable extends Vue {
	productColumns: any[] = [];
	relativeColumns: any[] = [];
	phoneColumns: any[] = [];

	products: IParent[] = [];

	expandedProductRows: IParent[] = [];
	expandedRelativeRows: IRelative[] = [];
	productService: ProductService = new ProductService();

	created() {
		this.productColumns = [
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
		this.relativeColumns = [
			{field: 'Relative ID', header: 'Relative ID'},
			{field: 'Patient ID', header: 'Patient ID'},
			{field: 'Is alive?', header: 'Is alive?'},
			{field: 'Frequency of visits', header: 'Frequency of visits'}
		];
		this.phoneColumns = [
			{field: 'Phone ID', header: 'Phone ID'},
			{field: 'ID of the relative', header: 'ID of the relative'},
			{field: 'Phone', header: 'Phone'}
		];
	}

	mounted() {
		this.productService.getProducts().then((data: IParent[]) => {
			console.table(data);
			this.products = data;
		});
	}

	deleteProduct(product: any): void {
		this.products = this.products.filter(val => val.id !== product.id);
		this.$toast.add({severity: 'success', summary: 'Successful', detail: 'Deleted', life: 3000});
	}
}
