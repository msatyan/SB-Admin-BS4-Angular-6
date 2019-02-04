import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable( {providedIn: 'root'} )
export class Product1Service {
private apiURL: string;

    constructor(private http: HttpClient,
        private config: ConfigService) {
        console.log('Product1Service.constructor()');

        const cfg =  this.config.getConfig();
        const apiURL = cfg.apiURL_product1;
    }

    test1() {

    }
}




