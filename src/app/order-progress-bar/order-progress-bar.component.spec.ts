import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order, Side } from '../domain/order';
import { OrderProgressBarComponent } from './order-progress-bar.component';

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
        component.order = new Order(
            'o100',
            Side.BUY,
            'GOOG',
            10000,
            6000,
            4000
        );
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
