import {InputSystem} from "./InputSystem";
import { Player } from "./Entities/Player";
import { Vector2 } from "./Vector2";
import { Entity } from "./Entities/Entity";

var cameraSpeed = 3;
const inputSystem = new InputSystem();
var entities: Entity[] = []; 


document.addEventListener("DOMContentLoaded", () => 
{
  const player = new Player(inputSystem);
  entities.push(player);

  for(var x = 0; x < 1000; x+=64)
  {
    for(var y = 0; y < 1000; y+=64)
    {

      var entity = new Entity("Tile", new Vector2(x,y));
      entity.SetSprite("Images/grass.png");
      entity.SetZDepth(0);
      entities.push(entity);
   }
  }

  GameLoop(entities, inputSystem);
});

async function GameLoop(entities: Entity[], inputSystem: InputSystem, )
{
  var camPosition = Vector2.Zero();
  for(const entity of entities)
  { 
    entity.Start();
  }
  
  while(true)
  {
    await new Promise(resolve => setTimeout(resolve, 10));
    for(const entity of entities)
    { 
      entity.Update();
    }


    if(inputSystem.IsKeyDown("h"))
    {
      camPosition.x += -cameraSpeed;
    }

    if(inputSystem.IsKeyDown("l"))
    {
      camPosition.x += cameraSpeed;
    }

    if(inputSystem.IsKeyDown("j"))
    {
      camPosition.y += cameraSpeed;
    }

    if(inputSystem.IsKeyDown("k"))
    {
      camPosition.y += -cameraSpeed;
    }

    for(const entity of entities)
    { 
      entity.ApplyCameraPositionToElement(camPosition);
    }

    inputSystem.ResetReleasedKeys(); 
  }
}
