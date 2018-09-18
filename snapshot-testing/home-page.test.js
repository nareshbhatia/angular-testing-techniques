const puppeteer = require('puppeteer');

describe('Home page', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
    });

    it('works', async () => {
        // Create a fresh browser page
        const page = await browser.newPage();

        // Set the desired viewport size
        await page.setViewport({
            width: 460,
            height: 220,
            deviceScaleFactor: 1
        });

        // Navigate to home page
        await page.goto('http://localhost:4200/');

        // Take a screen shot
        const image = await page.screenshot();

        // Allow 2% difference in images to compensate for different environments
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.02
        });
    });

    afterAll(async () => {
        await browser.close();
    });
});
