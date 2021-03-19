import axios from 'axios';
import {IJson} from '@/model/json.model';
import {IParent} from '@/model/parent.model';
import {IRelativesData} from '@/model/relatives-data.model';
import {IPhoneData} from '@/model/phones-data.model';

export default class ProductService {

	getProducts(): Promise<IParent[]> {
		return axios.get('data/example-data.json').then(this.parseProducts());
	}

	private parseProducts() {
		return (res: any) => {
			return res.data.map((json: IJson, index: number) => {
				const parent: IParent = json.data;
				parent.id = index;
				parent.relatives = [];

				if (json?.kids?.has_relatives?.records) {
					const relativeRecords = json.kids.has_relatives.records;
					relativeRecords.map((relativesData: IRelativesData, index: number) => {
						const relative = relativesData.data;
						relative.id = index;
						relative.phones = [];

						if (relativesData?.kids?.has_phone?.records) {
							const phoneRecords = relativesData.kids.has_phone.records;
							phoneRecords.map((phoneData: IPhoneData, index: number) => {
								const phone = phoneData.data;
								phone.id = index;
								relative.phones.push(phone);
							});
						}
						parent.relatives!.push(relative);
					});
				}
				return parent;
			})
		};
	}
}

