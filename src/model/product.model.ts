import {IRelative} from '@/model/relative.model';

export interface IProduct {
  id?: number;
  'Identification Number': number;
  Name: string;
  Gender: string;
  Risk: string;
  'Hair Length': string;
  IQ: number;
  'Admission Date': Date;
  'Last Breakdown': Date;
  'Yearly Fee': number;
  'Knows The Joker': boolean;

  relatives: IRelative[];
}
