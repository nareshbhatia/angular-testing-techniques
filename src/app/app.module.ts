import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderProgressBarComponent } from './order-progress-bar/order-progress-bar.component';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
    declarations: [AppComponent, OrderProgressBarComponent, OrderViewComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
