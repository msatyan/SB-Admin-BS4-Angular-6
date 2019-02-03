import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
// import { Table1Service } from './../../services';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],

    // Singleton: The providers array tells Angular to create a single, shared
    // instance of the service in this module and inject into any class/Component
    //  that asks for it. then the service is being shared by all components of this module
    // providers: [Table1Service], // Since Angular6 we can directly inject in the service class.

    declarations: [TablesComponent]
})
export class TablesModule {}
