import {IRelative} from '@/model/relative.model';
import {IPhoneData} from '@/model/phones-data.model';

export interface IRelativesData {
	data: IRelative;
	kids: {
		has_phone: {
			records: IPhoneData[];
		}
	}
}
