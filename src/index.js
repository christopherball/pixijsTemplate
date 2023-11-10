// Showcasing how to import both external and internal js code
import { Application, Sprite } from "pixi.js";
import logExample from "./another.js";

// Showcasing how to reference / bundle using webpack loader approach
import "./styles/style.css";
import bunnyImg from "./assets/bunny.png";

// Start of PixiJS app code
const app = new Application({ background: "#1099bb", resizeTo: window });
document.body.appendChild(app.view);

// Create a new Sprite from an image path
const bunny = Sprite.from(bunnyImg);

// Center the sprite's anchor point
bunny.anchor.set(0.5);

// Move the sprite to the center of the screen and add it to the stage
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
app.stage.addChild(bunny);

// Making an example call to sibling JS file
logExample();

// Listen for animate update
app.ticker.add((delta) => {
  bunny.rotation += 0.1 * delta;
});
