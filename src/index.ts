import {InputSystem} from "./InputSystem";
import { Player } from "./Entities/Player";

const inputSystem = new InputSystem();

document.addEventListener("DOMContentLoaded", () => {
  const player = new Player(inputSystem);

  GameLoop(player, inputSystem);
});

async function GameLoop(player: Player, inputSystem: InputSystem)
{
  while(true)
  {
    player.Start();
    await new Promise(resolve => setTimeout(resolve, 10));
    player.Update();
    inputSystem.ResetReleasedKeys();
  }
}
