import { IEntry } from 'app/shared/model//entry.model';

export interface ICategory {
    id?: number;
    name?: string;
    entries?: IEntry[];
}

export class Category implements ICategory {
    constructor(public id?: number, public name?: string, public entries?: IEntry[]) {}
}
