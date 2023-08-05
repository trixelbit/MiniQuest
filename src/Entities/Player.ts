import { PlayerMovement } from "../Components/PlayerMovement";
import { InputSystem } from "../InputSystem";
import { Entity } from "./Entity";

export class Player extends Entity
{
  constructor(inputSystem: InputSystem)
  {
    super("Player");
    this._element.src = "Images/idle_up.png";
    this.AddComponent(new PlayerMovement(this._element, inputSystem, 2));
  }
}
