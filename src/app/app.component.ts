import { Component } from '@angular/core';
import { Order, Side } from './domain/order';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    o100 = new Order('o100', Side.BUY, 'GOOG', 10000, 5000, 3000);
    o200 = new Order('o200', Side.SELL, 'HAL', 5000, 4500, 4000);
}
