import {InputSystem} from "./InputSystem";
import { Player } from "./Entities/Player";

const inputSystem = new InputSystem();

document.addEventListener("DOMContentLoaded", () => {
  
  const a = document.createElement("img");
  a.src = "Images/run_right.gif";
  a.src = "Images/run_left.gif";
  document.body.appendChild(a);
  const player = new Player(inputSystem);

  GameLoop(player, inputSystem,a );
});

async function GameLoop(player: Player, inputSystem: InputSystem, a: HTMLImageElement)
{
  while(true)
  {
    player.Start();
    await new Promise(resolve => setTimeout(resolve, 10));
    player.Update();
    inputSystem.ResetReleasedKeys(); 
   
    var target = "Images/run_right.gif";
    if(a.getAttribute("src") !== target)
    {
      //a.src = target;
      a.setAttribute("src", target);
      console.log(" New Src: " + a.src);
    }
  }
}
