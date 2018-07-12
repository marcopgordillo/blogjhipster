import { IEntry } from 'app/shared/model//entry.model';

export interface IBlog {
    id?: number;
    title?: string;
    description?: any;
    entries?: IEntry[];
}

export class Blog implements IBlog {
    constructor(public id?: number, public title?: string, public description?: any, public entries?: IEntry[]) {}
}
