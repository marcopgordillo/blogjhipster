import { ITag } from 'app/shared/model//tag.model';

export interface IEntry {
    id?: number;
    title?: string;
    description?: any;
    published?: boolean;
    tags?: ITag[];
    blogTitle?: string;
    blogId?: number;
    categoryName?: string;
    categoryId?: number;
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public description?: any,
        public published?: boolean,
        public tags?: ITag[],
        public blogTitle?: string,
        public blogId?: number,
        public categoryName?: string,
        public categoryId?: number
    ) {
        this.published = false;
    }
}
