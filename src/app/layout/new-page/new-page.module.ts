import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPageRoutingModule } from './new-page-routing.module';
import { NewPageComponent } from './new-page.component';

@NgModule({
    imports: [CommonModule, NewPageRoutingModule],
    declarations: [NewPageComponent]
})
export class NewPageModule {}
