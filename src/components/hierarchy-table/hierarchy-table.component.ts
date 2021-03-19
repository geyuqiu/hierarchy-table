import {Vue} from "vue-class-component";
import ProductService from '@/service/ProductService';
import {IProduct} from '@/model/product.model';
import {IRelative} from '@/model/relative.model';
import {IPhone} from '@/model/phone.model';

export default class HierarchyTable extends Vue {
	productColumns: any[] = [];
	relativeColumns: any[] = [];
	phoneColumns: any[] = [];

	products: IProduct[] = [];

	expandedProductRows: IProduct[] = [];
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
		this.productService.getProducts().then((data: IProduct[]) => {
			console.table(data);
			this.products = data;
		});
	}

	deleteProduct(product: IProduct): void {
		this.products = this.products.filter(val => val.id !== product.id);
		this.displayToastAfterDeletion();
	}

	private displayToastAfterDeletion() {
		this.$toast.add({severity: 'success', summary: 'Successful', detail: 'Deleted', life: 3000});
	}

	deleteRelative(relative: IRelative): void {
		const relativeIndex: number = this.products.findIndex(product => product.id === relative.productId);
		this.products[relativeIndex].relatives = this.products[relativeIndex].relatives.filter(val => val.id !== relative.id);
		this.displayToastAfterDeletion();
	}

	deletePhone(phone: IPhone): void {
		const relativeIndex: number = this.products.findIndex(product => product.id === phone.productId);
		const phoneIndex: number = this.products[relativeIndex].relatives.findIndex(relative => relative.id === phone.relativeId);
		this.products[relativeIndex].relatives[phoneIndex].phones = this.products[relativeIndex].relatives[phoneIndex].phones.filter(val => val.id !== phone.id);
		this.displayToastAfterDeletion();
	}
}
