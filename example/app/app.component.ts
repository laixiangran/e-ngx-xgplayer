import { Component } from '@angular/core';
import { ENgxXGPlayerComponent } from '../../src';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	playerOpts: any;

	constructor() {
		this.playerOpts = {
			url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
		};
	}

	ready(evt: ENgxXGPlayerComponent) {
		console.log(evt);
	}

	complete(evt: ENgxXGPlayerComponent) {
		console.log(evt);
	}

	destroy(evt: any) {
		console.log(evt);
	}
}
