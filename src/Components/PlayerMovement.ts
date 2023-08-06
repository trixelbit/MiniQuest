import { Entity, Component } from "../Entities/Entity";
import { InputSystem } from "../InputSystem";
import { Vector2 } from "../Vector2";

export class PlayerMovement extends Component
{
  private _maxSpeed: number;
  private _velocity: Vector2 = Vector2.Zero();  
  private _input: Vector2 = Vector2.Zero();  
  private _inputSystem: InputSystem;

  private readonly DRAG_COEFFICIENT: number = 0.05;


  get Velocity(): Vector2
  {
    return this._velocity.Copy();
  }

  constructor(entity: Entity, element: HTMLImageElement, inputSystem: InputSystem, maxSpeed: number)
  {
    super(entity);
    this._inputSystem = inputSystem; 
    this._maxSpeed = maxSpeed;

    console.log("constructor world pos " + entity.WorldPosition.x);
  }


  public Update(): void 
  {
    this._input = this.ProcessInput();
    console.log("in" + this._input.x);
    this._velocity = Vector2.Scale(this._input, this._maxSpeed);
    console.log("vel" + this._velocity.x);
    this._velocity = Vector2.Lerp(this._velocity, Vector2.Zero(), this.DRAG_COEFFICIENT);

    console.log("vel" + this._velocity.x);
    const newX = this.Entity.WorldPosition.x + (this._velocity.x);
    const newY = this.Entity.WorldPosition.y + (this._velocity.y);

    this.Entity.WorldPosition = new Vector2(newX, newY);
    console.log("Update" + this.Entity.WorldPosition);
  }
  
  private ProcessInput(): Vector2
  {
    const left = this._inputSystem.IsKeyDown("a");
    const right = this._inputSystem.IsKeyDown("d");
    const up = this._inputSystem.IsKeyDown("w");
    const down = this._inputSystem.IsKeyDown("s");

    var x = 0;
    var y = 0;

    if(left)
    {
      x -= 1;
    }

    if(right)
    {
      x += 1;
    }

    if(up)
    {
      y -= 1;
    }

    if(down)
    {
      y += 1;
    }

    return Vector2.Normalized(new Vector2(x, y));
  }
}

