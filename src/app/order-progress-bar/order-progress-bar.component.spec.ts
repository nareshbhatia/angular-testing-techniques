import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Order, Side } from '../domain/order';
import { OrderProgressBarComponent } from './order-progress-bar.component';

// Test orders
const o100 = new Order('o100', Side.BUY, 'GOOG', 10000, 0, 0);
const o200 = new Order('o200', Side.BUY, 'GOOG', 10000, 10000, 0);
const o300 = new Order('o300', Side.BUY, 'GOOG', 10000, 10000, 10000);
const o400 = new Order('o400', Side.BUY, 'GOOG', 10000, 5000, 3000);

// Test for odd percentages
const o500 = new Order('o500', Side.BUY, 'GOOG', 3000, 1000, 700);

/**
 * Returns the width of an element as a number. Strips out the pixel units.
 */
function getWidth(elm: HTMLElement): number {
    const width = getComputedStyle(elm).width;
    return parseFloat(width);
}

/**
 * Returns the bar percentages of a progress bar.
 */
function getBarPercents(elm: HTMLElement) {
    const elmWidth = getWidth(elm);
    return {
        done: getWidth(elm.querySelector('.done')) / elmWidth,
        notDone: getWidth(elm.querySelector('.not-done')) / elmWidth,
        uncommitted: getWidth(elm.querySelector('.uncommitted')) / elmWidth
    };
}

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
    });

    it('should create', () => {
        component.order = o100;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should show the correct bars for an uncommitted order', () => {
        component.order = o100;
        fixture.detectChanges();
        const pcts = getBarPercents(fixture.nativeElement);
        expect(pcts.done).toBeCloseTo(0, 4);
        expect(pcts.notDone).toBeCloseTo(0, 4);
        expect(pcts.uncommitted).toBeCloseTo(1, 4);
    });

    it('should show the correct bars for a fully committed order', () => {
        component.order = o200;
        fixture.detectChanges();
        const pcts = getBarPercents(fixture.nativeElement);
        expect(pcts.done).toBeCloseTo(0, 4);
        expect(pcts.notDone).toBeCloseTo(1, 4);
        expect(pcts.uncommitted).toBeCloseTo(0, 4);
    });

    it('should show the correct bars for a fully done order', () => {
        component.order = o300;
        fixture.detectChanges();
        const pcts = getBarPercents(fixture.nativeElement);
        expect(pcts.done).toBeCloseTo(1, 4);
        expect(pcts.notDone).toBeCloseTo(0, 4);
        expect(pcts.uncommitted).toBeCloseTo(0, 4);
    });

    it('should show the correct bars for a partially done order', () => {
        component.order = o400;
        fixture.detectChanges();
        const pcts = getBarPercents(fixture.nativeElement);
        expect(pcts.done).toBeCloseTo(0.3, 4);
        expect(pcts.notDone).toBeCloseTo(0.2, 4);
        expect(pcts.uncommitted).toBeCloseTo(0.5, 4);
    });

    it('should show the correct bars for odd percentages', () => {
        component.order = o500;
        fixture.detectChanges();
        const pcts = getBarPercents(fixture.nativeElement);
        expect(pcts.done).toBeCloseTo(0.2333, 4);
        expect(pcts.notDone).toBeCloseTo(0.1, 4);
        expect(pcts.uncommitted).toBeCloseTo(0.6667, 4);
    });
});
