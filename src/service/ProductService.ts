import axios from 'axios';
import {IJson} from '@/model/json.model';
import {IProduct} from '@/model/product.model';
import {IRelativesData} from '@/model/relatives-data.model';
import {IPhoneData} from '@/model/phones-data.model';

export default class ProductService {

	getProducts(): Promise<IProduct[]> {
		return axios.get('data/example-data.json').then(this.parseProducts());
	}

	private parseProducts() {
		return (res: any) => {
			return res.data.map((json: IJson, productIndex: number) => {
				const product: IProduct = json.data;
				product.id = productIndex;
				product.relatives = [];

				if (json?.kids?.has_relatives?.records) {
					const relativeRecords = json.kids.has_relatives.records;
					relativeRecords.map((relativesData: IRelativesData, relativeIndex: number) => {
						const relative = relativesData.data;
						relative.productId = productIndex;
						relative.id = relativeIndex;
						relative.phones = [];

						if (relativesData?.kids?.has_phone?.records) {
							const phoneRecords = relativesData.kids.has_phone.records;
							phoneRecords.map((phoneData: IPhoneData, phoneIndex: number) => {
								const phone = phoneData.data;
								phone.productId = productIndex;
								phone.relativeId = relativeIndex;
								phone.id = phoneIndex;
								relative.phones.push(phone);
							});
						}
						product.relatives!.push(relative);
					});
				}
				return product;
			})
		};
	}
}

