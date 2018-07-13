import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order, Side } from '../domain/order';
import { OrderViewComponent } from './order-view.component';
import { OrderProgressBarComponent } from '../order-progress-bar/order-progress-bar.component';

// Test orders
const o100 = new Order('o100', Side.BUY, 'GOOG', 10000, 5000, 3000);
const o200 = new Order('o200', Side.SELL, 'GOOG', 10000, 5000, 3000);

describe('OrderViewComponent', () => {
    let component: OrderViewComponent;
    let fixture: ComponentFixture<OrderViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderViewComponent, OrderProgressBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderViewComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.order = o100;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should show the correct information for a buy order', () => {
        component.order = o100;
        fixture.detectChanges();

        const elm = fixture.nativeElement;
        const container = elm.querySelector('.container');
        const title = elm.querySelector('.title');
        const symbol = elm.querySelector('.js-symbol');
        const quantity = elm.querySelector('.js-quantity');

        // Tile background should be green
        expect(getComputedStyle(container).backgroundColor).toBe(
            'rgb(44, 77, 61)'
        );

        // Title should 'BUY' and green
        expect(title.textContent.trim()).toBe('BUY');
        expect(getComputedStyle(title).color).toBe('rgb(0, 178, 95)');

        // Symbol and value should be 'GOOG' and '10000'
        expect(symbol.textContent.trim()).toBe('GOOG');
        expect(quantity.textContent.trim()).toBe('10000');
    });

    it('should show the correct information for a sell order', () => {
        component.order = o200;
        fixture.detectChanges();

        const elm = fixture.nativeElement;
        const container = elm.querySelector('.container');
        const title = elm.querySelector('.title');
        const symbol = elm.querySelector('.js-symbol');
        const quantity = elm.querySelector('.js-quantity');

        // Tile background should be brown
        expect(getComputedStyle(container).backgroundColor).toBe(
            'rgb(77, 62, 46)'
        );

        // Title should 'SELL' and orange
        expect(title.textContent.trim()).toBe('SELL');
        expect(getComputedStyle(title).color).toBe('rgb(229, 122, 0)');

        // Symbol and value should be 'GOOG' and '10000'
        expect(symbol.textContent.trim()).toBe('GOOG');
        expect(quantity.textContent.trim()).toBe('10000');
    });
});
