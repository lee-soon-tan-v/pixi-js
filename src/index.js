import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  backgroundColor: 0xfffff,
  resizeTo: window,
});

document.body.appendChild(app.view);

// Your game here – e.g., touch to spawn bouncing bunnies
const texture = PIXI.Texture.from("https://pixijs.com/assets/bunny.png");

let textureFlowerTop = PIXI.Texture.from(
  "https://pixijs.com/assets/flowerTop.png"
);
let textureEggHead = PIXI.Texture.from("https://pixijs.com/assets/eggHead.png");

const sprites = [];

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;

app.stage.on("pointerdown", (e) => {
  let index = getRandomInt(3); // 0, 1, 2
  let sprite;
  switch (index) {
    case 0:
      sprite = new PIXI.Sprite(texture);
      break;
    case 1:
      sprite = new PIXI.Sprite(textureEggHead);
      sprite.scale.set(0.5);
      break;
    case 2:
      sprite = new PIXI.Sprite(textureFlowerTop);
      sprite.scale.set(0.5);
      break;
  }

  sprite.anchor.set(0.5);
  sprite.x = e.global.x;
  sprite.y = e.global.y;
  sprite.vx = (Math.random() - 0.5) * 10;
  sprite.vy = (Math.random() - 0.5) * 10;
  app.stage.addChild(sprite);
  sprites.push(sprite);
});

app.ticker.add(() => {
  sprites.forEach((s) => {
    s.x += s.vx;
    s.y += s.vy;
    s.vy += 0.2; // Gravity
    if (s.x < 0 || s.x > app.screen.width) s.vx *= -1;
    if (s.y > app.screen.height) {
      s.y = app.screen.height;
      s.vy *= -0.8;
    }
    s.rotation += 0.01;
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
