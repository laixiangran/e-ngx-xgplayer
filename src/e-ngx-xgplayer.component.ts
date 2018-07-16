import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import Player from 'xgplayer';

declare let Player: any;

@Component({
	selector: 'e-ngx-xgplayer',
	templateUrl: './e-ngx-xgplayer.component.html',
	styleUrls: ['./e-ngx-xgplayer.component.scss']
})
export class ENgxXGPlayerComponent implements OnInit {
	@ViewChild('playerElem') playerElemRef: ElementRef;

	private player: any;
	private defaultOptions: Object;

	@Input() set options(value: any) {
		this.defaultOptions = {
			el: this.playerElemRef.nativeElement
		};
		this.defaultOptions = Object.assign(this.defaultOptions, value);
	}

	constructor() {
	}

	ngOnInit() {
		this.player = new Player(this.defaultOptions);
	}
}
