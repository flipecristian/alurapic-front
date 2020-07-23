import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoForModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoForModule,
        PhotoListModule
    ]
})
export class PhotosModule {}