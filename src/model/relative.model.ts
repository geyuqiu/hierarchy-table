import {IPhone} from '@/model/phone.model';

export interface IRelative {
  id: number;
  productId: number;
  'Relative ID': number;
  'Patient ID': number;
  'Is alive?': boolean;
  'Frequency of visits': number;
  phones: IPhone[];
}
