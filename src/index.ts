import {InputSystem} from "./InputSystem";
import { Entity } from "./Entity";

const playerElement = document.getElementById("Player") as HTMLElement;
playerElement.style.position = "absolute";
playerElement.style.left = "100px";
playerElement.style.top = "100px";

const inputSystem = new InputSystem();
const player = new Entity(playerElement, 2, inputSystem);

async function GameLoop()
{
  while(true)
  {
    await new Promise(resolve => setTimeout(resolve, 10));
    player.Update();
    inputSystem.ResetReleasedKeys();
  }
}

GameLoop();

