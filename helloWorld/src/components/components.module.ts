import { NgModule } from '@angular/core';
import { RequestIdClientComponent } from './request-id-client/request-id-client';
import { InfoClientComponent } from './info-client/info-client';
@NgModule({
	declarations: [RequestIdClientComponent,
    InfoClientComponent],
	imports: [],
	exports: [RequestIdClientComponent,
    InfoClientComponent]
})
export class ComponentsModule {}
