import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from './currency.service';


@Component({
    selector: 'currency-modal',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CurrencyComponent implements OnInit {

    constructor(private currencyService: CurrencyService) {
    }

    ngOnInit(): void {
        // bunu modal inputtan alacaksın
        const currency = 'TL';
        this.currencyService.getCurrencyRateByCode(currency).subscribe(
            res => {
                console.log(res);
            },
            err => {
                throw err;
            }
        );
    }

}
