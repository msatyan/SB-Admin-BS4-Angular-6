
import { Injectable } from '@angular/core';

@Injectable()
export class Myd3Service {

    getD3Chart1Data() {
        const D3Chart1Data = [10, 20, 30, 40, 60, 50, 80, 87];

        return (D3Chart1Data);
    }
}


