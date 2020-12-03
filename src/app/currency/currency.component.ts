import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from './currency.service';


@Component({
    selector: 'currency-modal',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class CurrencyComponent implements OnInit {
    @Input() id: string;
    private element: any;

    constructor(private currencyService: CurrencyService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'currency-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.currencyService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.currencyService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('currency-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('currency-modal-open');
    }
}
