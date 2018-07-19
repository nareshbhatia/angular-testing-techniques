const puppeteer = require('puppeteer');

describe('Home page', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch();
    });

    it('works', async () => {
        const page = await browser.newPage();
        await page.setViewport({width: 460, height: 220, deviceScaleFactor: 1});
        await page.goto('http://localhost:4200/');
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
        await browser.close();
    });
});
