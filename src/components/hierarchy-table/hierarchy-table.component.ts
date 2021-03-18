import {Vue} from "vue-class-component";
import ProductService from '@/service/ProductService';
import {IParent} from '@/model/parent.model';
import {IJson} from '@/model/json.model';
import {IRelativesData} from '@/model/relatives-data.model';

export default class HierarchyTable extends Vue {
	productColumns: any[] = [];
	relativeColumns: any[] = [];
	phoneColumns: any[] = [];
	products: IParent[] = [];
	expandedRows: IParent[] = [];
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
			{field: 'Frequency Of Visits', header: 'Frequency Of Visits'}
		];
		this.phoneColumns = [
			{field: 'Phone ID', header: 'Phone ID'},
			{field: 'ID Of The Relative', header: 'ID Of The Relative'},
			{field: 'Phone', header: 'Phone'}
		];
	}

	mounted() {
		this.productService.getProducts().then((data: any) => {
			data.map((json: IJson, index: number) => {
				const parent: IParent = json.data;
				parent.id = index;
				parent.relatives = [];

				if (json?.kids?.has_relatives?.records) {
					json.kids.has_relatives.records.map((relativesData: IRelativesData, index: number) => {
						const relative = relativesData.data;
						relative.id = index;
						parent.relatives!.push(relative);
					})
				}
				this.products.push(parent);
			})
			console.table(this.products);
		});
	}

	deleteProduct(product: any): void {
		this.products = this.products.filter(val => val.id !== product.id);
		this.$toast.add({severity: 'success', summary: 'Successful', detail: 'Deleted', life: 3000});
	}

	onRowExpand(event: any) {
		this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
	}

	onRowCollapse(event: any) {
		this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
	}
}
