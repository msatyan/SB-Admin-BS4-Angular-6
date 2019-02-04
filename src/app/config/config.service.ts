import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {

    constructor() {
        console.log('ConfigService.constructor()');
    }

    getConfig() {
        // for the time being let it be static,
        // We may consider getting this information from server.

        // Configuration information for production
        const Config_prod = {
            apiURL_product1: 'http://localhost:3000/v1/product',
            apiURL_order: 'http://localhost:3000/v1/order'
        };

        // Configuration information for test
        const Config_test = {
            apiURL_product1: 'http://localhost:3000/v1/product',
            apiURL_order: 'http://localhost:3000/v1/order'
        };

        if (environment.production) {
            return (Config_prod);
        }
        return (Config_test);
    }
}



