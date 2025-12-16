import { Application, Assets, Sprite } from 'pixi.js';

(async () => {
  // Create a PixiJS application
  const app = new Application();
  await app.init({ width: window.innerWidth, height: window.innerHeight, backgroundColor: 0x1099bb });
  document.body.appendChild(app.canvas);

  // Load a texture and create a sprite
  const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
  const bunny = new Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;
  app.stage.addChild(bunny);

  // Animate the bunny
  app.ticker.add((time) => {
    bunny.rotation += 0.1 * time.deltaTime;
  });
})();
