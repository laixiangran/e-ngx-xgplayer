import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as Player from 'xgplayer';

@Component({
	selector: 'e-ngx-xgplayer',
	templateUrl: './e-ngx-xgplayer.component.html',
	styleUrls: ['./e-ngx-xgplayer.component.scss']
})
export class ENgxXGPlayerComponent implements OnInit, OnDestroy {
	@ViewChild('playerElem') playerElemRef: ElementRef;
	private player: any;
	private defaultOptions: Object;

	@Input() set options(value: any) {
		this.defaultOptions = {
			el: this.playerElemRef.nativeElement
		};
		this.defaultOptions = Object.assign(this.defaultOptions, value);
	}

	@Input() set plugins(value: { name: string, handler: Function }[]) {
		value.forEach((plugin: { name: string, handler: Function }) => {
			Player.install(plugin.name, plugin.handler);
		});
	}

	@Output() ready: EventEmitter<any> = new EventEmitter<any>();
	@Output() startplay: EventEmitter<any> = new EventEmitter<any>();
	@Output() playing: EventEmitter<any> = new EventEmitter<any>();
	@Output() paused: EventEmitter<any> = new EventEmitter<any>();
	@Output() ended: EventEmitter<any> = new EventEmitter<any>();
	@Output() error: EventEmitter<any> = new EventEmitter<any>();
	@Output() seeking: EventEmitter<any> = new EventEmitter<any>();
	@Output() seeked: EventEmitter<any> = new EventEmitter<any>();
	@Output() timeupdate: EventEmitter<any> = new EventEmitter<any>();
	@Output() waiting: EventEmitter<any> = new EventEmitter<any>();
	@Output() canplay: EventEmitter<any> = new EventEmitter<any>();
	@Output() canplaythrough: EventEmitter<any> = new EventEmitter<any>();
	@Output() durationchange: EventEmitter<any> = new EventEmitter<any>();
	@Output() volumechange: EventEmitter<any> = new EventEmitter<any>();
	@Output() complete: EventEmitter<any> = new EventEmitter<any>();
	@Output() destroy: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	ngOnInit() {
		this.player = new Player(this.defaultOptions);
		this.initEvents();
	}

	ngOnDestroy() {
		this.player.destroy();
	}

	/**
	 * 初始化事件
	 */
	initEvents() {
		this.player.once('ready', () => {
			this.ready.emit(this);
		});
		this.player.once('complete', () => {
			this.complete.emit(this);
		});
		this.player.on('play', (evt: any) => {
			this.startplay.emit(evt);
		});
		this.player.on('playing', (evt: any) => {
			this.playing.emit(evt);
		});
		this.player.on('pause', (evt: any) => {
			this.paused.emit(evt);
		});
		this.player.on('ended', (evt: any) => {
			this.ended.emit(evt);
		});
		this.player.on('error', (evt: any) => {
			this.error.emit(evt);
		});
		this.player.on('seeking', (evt: any) => {
			this.seeking.emit(evt);
		});
		this.player.on('seeked', (evt: any) => {
			this.seeked.emit(evt);
		});
		this.player.on('timeupdate', (evt: any) => {
			this.timeupdate.emit(evt);
		});
		this.player.on('waiting', (evt: any) => {
			this.waiting.emit(evt);
		});
		this.player.on('canplay', (evt: any) => {
			this.canplay.emit(evt);
		});
		this.player.on('canplaythrough', (evt: any) => {
			this.canplaythrough.emit(evt);
		});
		this.player.on('durationchange', (evt: any) => {
			this.durationchange.emit(evt);
		});
		this.player.on('volumechange', (evt: any) => {
			this.volumechange.emit(evt);
		});
		this.player.once('destroy', () => {
			this.destroy.emit();
		});
	}

	/**
	 * 启动播放器，一般都是播放器内部隐式调用，主要功能是将 video 添加到 DOM
	 * @param {string} url 视频地址
	 */
	start(url: string) {
		this.player.start(url);
	}

	/**
	 * 播放视频
	 */
	play() {
		this.player.play();
	}

	/**
	 * 播放器重播视频，重播的组件就调用了这个方法，支持 beforeReplay 钩子，如果 beforeReplay 返回为 false 阻止重播动作。
	 */
	replay() {
		this.player.replay();
	}

	/**
	 * 暂停视频
	 */
	pause() {
		this.player.pause();
	}

	/**
	 * 重新加载视频
	 */
	reload() {
		this.player.reload();
	}

	/**
	 * 检测您的浏览器是否能播放不同类型的视频
	 * @param {string} mimeType 检测的类型
	 * @returns {boolean}
	 */
	canPlayType(mimeType: string): boolean {
		return this.player.canPlayType(mimeType);
	}

	/**
	 * 返回当前的缓冲片段时间范围，start表示缓冲起始时间，end表示缓存截止时间
	 * @returns [start,end]
	 */
	getBufferedRange(): any {
		return this.player.getBufferedRange();
	}
}
