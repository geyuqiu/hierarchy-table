import axios from 'axios';

export default class ProductService {

	getProductsSmall() {
		// @ts-ignore
		return axios.get('data/products-small.json').then(res => res.data.data);
	}
}

