Angular Storybook Test
======================

This is an example of testing an Angular app using Storybook. The final app shows two tiles representing a buy order and a sell order in the stock market. Each tile is created using an Angular component called `OrderViewComponent`. We use Storybook to instantiate the order in various states and test whether it is functioning correctly.

![Screen Shot](assets/screen-shot.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

Quick Started
-------------
```bash
$ yarn install  <--- npm install works too
$ ng serve
```

Now point your browser to http://localhost:4200/.

Running Storybook
-----------------
Run `yarn storybook` and point your browser to http://localhost:6006/.

Running unit tests
------------------
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Running end-to-end tests
------------------------
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Further help
------------
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
