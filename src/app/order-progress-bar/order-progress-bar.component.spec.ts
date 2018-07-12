import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order, Side } from '../domain/order';
import { OrderProgressBarComponent } from './order-progress-bar.component';

const o100 = new Order('o100', Side.BUY, 'GOOG', 10000, 6000, 4000);
const o200 = new Order('o200', Side.SELL, 'HAL', 5000, 4500, 4000);

describe('OrderProgressBarComponent', () => {
    let component: OrderProgressBarComponent;
    let fixture: ComponentFixture<OrderProgressBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderProgressBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderProgressBarComponent);
        component = fixture.componentInstance;
        component.order = o100;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
