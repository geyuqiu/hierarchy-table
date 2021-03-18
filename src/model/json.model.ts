import {IParent} from '@/model/parent.model';
import {IRelativesData} from '@/model/relatives-data.model';

export interface IJson {
	data: IParent;
	kids: {
		has_relatives: {
			records: IRelativesData[];
		}
	}
}
