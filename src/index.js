import * as PIXI from 'pixi.js';

// Create the application (no subclassing)
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,  // Optional: light blue background
});

// Add the canvas to the page
document.body.appendChild(app.canvas);

// Optional: Make the app resize-friendly
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

// Example: Add a simple sprite (like the bunny from Pixi examples)
(async () => {
  const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');
  const bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);  // Center the sprite
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;
  app.stage.addChild(bunny);

  // Animate it (rotate slowly)
  app.ticker.add((time) => {
    bunny.rotation += 0.05 * time.deltaTime;
  });
})();
