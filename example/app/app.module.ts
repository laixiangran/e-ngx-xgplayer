import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ENgxXGPlayerModule } from '../../src';

@NgModule({
	imports: [
		BrowserModule,
		ENgxXGPlayerModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
