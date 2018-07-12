import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../domain/order';

@Component({
    selector: 'app-order-progress-bar',
    templateUrl: './order-progress-bar.component.html',
    styleUrls: ['./order-progress-bar.component.css']
})
export class OrderProgressBarComponent implements OnInit {
    @Input() order: Order;

    constructor() {}

    ngOnInit() {}
}
