import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../domain/order';

@Component({
    selector: 'app-order-view',
    templateUrl: './order-view.component.html',
    styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
    @Input() order: Order;

    constructor() {}

    ngOnInit() {}
}
