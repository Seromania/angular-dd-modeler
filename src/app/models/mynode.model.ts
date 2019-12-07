import { INodeModel } from './nodemodel.interface';

export interface IMyNodeModel extends INodeModel {
  test: string;
  arrayTest: {
    arrayText: string
  }[];
};
