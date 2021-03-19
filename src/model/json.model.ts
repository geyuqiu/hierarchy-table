import {IProduct} from '@/model/product.model';
import {IRelativesData} from '@/model/relatives-data.model';

export interface IJson {
	data: IProduct;
	kids: {
		has_relatives: {
			records: IRelativesData[];
		}
	}
}
