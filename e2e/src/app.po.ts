import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getOrders() {
        return element.all(by.css('app-order-view'));
    }

    getOrderCount() {
        return this.getOrders().count();
    }

    getOrderSymbol(index) {
        return this.getOrders()
            .get(index)
            .element(by.css('.js-symbol'))
            .getText();
    }
}
