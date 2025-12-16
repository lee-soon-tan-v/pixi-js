import * as PIXI from 'pixi.js';

console.log(PIXI.Application); // Should log a function

class MyApp extends PIXI.Application {
  constructor() {
    super({ width: 800, height: 600 });
  }
}

const app = new MyApp();
document.body.appendChild(app.canvas);
