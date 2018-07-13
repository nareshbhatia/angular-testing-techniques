import { AppPage } from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display two orders', () => {
        page.navigateTo();

        // Expect two orders
        expect(page.getOrderCount()).toEqual(2);

        // Test that we have the correct symbols
        expect(page.getOrderSymbol(0)).toEqual('GOOG');
        expect(page.getOrderSymbol(1)).toEqual('HAL');
    });
});
