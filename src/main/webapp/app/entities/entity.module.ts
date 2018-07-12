import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogjhipsterCategoryModule } from './category/category.module';
import { BlogjhipsterTagModule } from './tag/tag.module';
import { BlogjhipsterBlogModule } from './blog/blog.module';
import { BlogjhipsterEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogjhipsterCategoryModule,
        BlogjhipsterTagModule,
        BlogjhipsterBlogModule,
        BlogjhipsterEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogjhipsterEntityModule {}
