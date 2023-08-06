import {InputSystem} from "./InputSystem";
import { Player } from "./Entities/Player";

const inputSystem = new InputSystem();

document.addEventListener("DOMContentLoaded", () => {
  
  const player = new Player(inputSystem);

  for(var x = 0; x < 1000; x+=64)
  {
    for(var y = 0; y < 1000; y+=64)
    {
      const tile = document.createElement("img");
      tile.style.position 
      tile.style.position = "absolute";
      tile.style.scale = "200%";
      tile.style.imageRendering = "pixelated";
      tile.src = "Images/grass.png";
      tile.style.zIndex = "0";
      tile.style.left = x.toString() + "px";
      tile.style.top = y.toString() + "px";
      tile.style.scale = "2";

      document.body.appendChild(tile);
    }
  }

  GameLoop(player, inputSystem);
});

async function GameLoop(player: Player, inputSystem: InputSystem, )
{
  while(true)
  {
    player.Start();
    await new Promise(resolve => setTimeout(resolve, 10));
    player.Update();
    inputSystem.ResetReleasedKeys(); 
   
  }
}
