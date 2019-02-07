import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Table1Service} from './../../services';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    // private Table1Data: Array<any>;
    public Table1Data: any;

    // constructor() {}
    constructor(table1Service: Table1Service) {
        this.Table1Data = table1Service.getTable1Data();
    }


    ngOnInit() {}
}
