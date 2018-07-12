import { Component, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Order } from './domain/order';

@Component({ selector: 'app-order-view', template: '' })
class OrderViewStubComponent {
    @Input() order: Order;
}

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, OrderViewStubComponent]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
