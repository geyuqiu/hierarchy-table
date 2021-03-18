import axios from 'axios';

export default class ProductService {

	getProducts(): any {
		return axios.get('data/example-data.json').then(res => {
			return res.data;
		});
	}
}

