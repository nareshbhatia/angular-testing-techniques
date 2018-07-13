import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Order, Side } from '../app/domain/order';
import { OrderViewComponent } from '../app/order-view/order-view.component';
import { OrderProgressBarComponent } from '../app/order-progress-bar/order-progress-bar.component';

const o100 = new Order('o100', Side.BUY, 'GOOG', 10000, 0, 0);
const o200 = new Order('o200', Side.BUY, 'GOOG', 10000, 10000, 0);
const o300 = new Order('o300', Side.BUY, 'GOOG', 10000, 10000, 10000);
const o400 = new Order('o400', Side.BUY, 'GOOG', 10000, 5000, 3000);
const o500 = new Order('o500', Side.SELL, 'GOOG', 10000, 5000, 3000);

storiesOf('Order View', module)
    .addDecorator(
        moduleMetadata({
            declarations: [OrderProgressBarComponent]
        })
    )
    .add('uncommitted order', () => ({
        component: OrderViewComponent,
        props: {
            order: o100
        }
    }))
    .add('fully committed order', () => ({
        component: OrderViewComponent,
        props: {
            order: o200
        }
    }))
    .add('fully done order', () => ({
        component: OrderViewComponent,
        props: {
            order: o300
        }
    }))
    .add('partially done buy order', () => ({
        component: OrderViewComponent,
        props: {
            order: o400
        }
    }))
    .add('partially done sell order', () => ({
        component: OrderViewComponent,
        props: {
            order: o500
        }
    }));
