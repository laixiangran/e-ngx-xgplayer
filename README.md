# e-ngx-xgplayer

基于Angular的[西瓜播放器](http://h5player.bytedance.com/)。

## Usage

1. Install

	```shell
	npm install --save e-ngx-xgplayer@latest
	```
	
2. Set in the .angular-cli.json（@angular/cli）

	```json
    "scripts": [
       "../node_modules/xgplayer/browser/index.js"
    ]
	```

3. Add the ENgxXGPlayerModule

	```typescript
	import { ENgxXGPlayerModule } from "e-ngx-xgplayer";
	@NgModule({
	    imports: [
	        ENgxXGPlayerModule
	    ]
	})
	```

3. Use in Template

	```html
	<e-ngx-xgplayer [options]="playerOpts"
                    (ready)="ready($event)"
                    (destroy)="destroy($event)"
                    (complete)="complete($event)">
    </e-ngx-xgplayer>
	```

4. Use in Component

	```typescript
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
	```

## API

### Inputs

- `options`（`any`） - 播放器配置，与[西瓜播放器配置](http://h5player.bytedance.com/config)一致（**注意：`el` 配置项无需再手动配置，组件内部自动获取**）

- `plugins`（`{name: string, handler: Function}[]`） - 自定义插件。name: 插件名称，handler：处理函数（插件逻辑）。参考[西瓜播放器自定义插件](http://h5player.bytedance.com/plugins/#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6)

### Outputs

- `ready` - 实例化完成事件，此时不可以调用 ENgxXGPlayerComponent 实例与视频交互的相关方法，因为 video 还没生成。参数 $event 为当前 ENgxXGPlayerComponent 实例对象。参考[西瓜播放器实例化完成事件](http://h5player.bytedance.com/api/#%E5%AE%9E%E4%BE%8B%E5%8C%96%E5%AE%8C%E6%88%90)

- `complete` - 视频生成结束事件。参数 $event 为当前 ENgxXGPlayerComponent 实例对象，此时才可以调用 ENgxXGPlayerComponent 实例与视频交互的相关方法。参考[西瓜播放器视频生成结束事件](http://h5player.bytedance.com/api/#%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90%E7%BB%93%E6%9D%9F)

### Instance Method

参考[西瓜播放器方法](http://h5player.bytedance.com/api/#%E6%96%B9%E6%B3%95)

- `start(url: string): void` - 启动播放器

- `play(): void` - 播放视频

- `replay(): void` - 播放器重播视频

- `pause(): void` - 暂停视频

- `reload(): void` - 重新加载视频

- `canPlayType(mimeType: string): boolean` - 检测您的浏览器是否能播放不同类型的视频，mimeType：检测的类型

- `getBufferedRange(): any` - 返回当前的缓冲片段时间范围，`[start,end]：start 表示缓冲起始时间，end 表示缓存截止时间`

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
