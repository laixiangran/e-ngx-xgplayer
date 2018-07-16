import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENgxXGPlayerComponent } from './e-ngx-xgplayer.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ENgxXGPlayerComponent],
	exports: [CommonModule, ENgxXGPlayerComponent]
})
export class ENgxXGPlayerModule {
}
