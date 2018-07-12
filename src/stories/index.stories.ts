import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Order, Side } from '../app/domain/order';
import { OrderViewComponent } from '../app/order-view/order-view.component';
import { OrderProgressBarComponent } from '../app/order-progress-bar/order-progress-bar.component';

storiesOf('Order View', module)
    .add('buy order', () => ({
        component: OrderViewComponent,
        moduleMetadata: {
            declarations: [OrderProgressBarComponent]
        },
        props: {
            order: new Order('o100', Side.BUY, 'GOOG', 10000, 6000, 4000)
        }
    }))
    .add('sell order', () => ({
        component: OrderViewComponent,
        moduleMetadata: {
            declarations: [OrderProgressBarComponent]
        },
        props: {
            order: new Order('o200', Side.SELL, 'HAL', 5000, 4500, 4000)
        }
    }));
