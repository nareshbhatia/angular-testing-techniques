import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order, Side } from '../domain/order';
import { OrderViewComponent } from './order-view.component';
import { OrderProgressBarComponent } from '../order-progress-bar/order-progress-bar.component';

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
