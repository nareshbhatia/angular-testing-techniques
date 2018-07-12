import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getAllOrders() {
        return element.all(by.css('app-order-view'));
    }
}
