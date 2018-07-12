import { AppPage } from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display two orders', () => {
        page.navigateTo();
        expect(page.getAllOrders().count()).toEqual(2);
    });
});
