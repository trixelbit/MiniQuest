import { IComponent } from "../Entities/Entity";
import { InputSystem } from "../InputSystem";
import { Vector2 } from "../Vector2";

export class PlayerMovement implements IComponent
{
  private _element: HTMLImageElement;

  private _maxSpeed: number;
  private _velocity: Vector2 = Vector2.Zero();  
  private _input: Vector2 = Vector2.Zero();  
  private _inputSystem: InputSystem;

  private readonly DRAG_COEFFICIENT: number = 0.05;

  get Velocity(): Vector2
  {
    return this._velocity.Copy()
  }

  constructor(element: HTMLImageElement, inputSystem: InputSystem, maxSpeed: number)
  {
    this._inputSystem = inputSystem; 
    this._element = element;
    this._maxSpeed = maxSpeed;
  }


  public Start(): void
  {
    
  }

  public Update(): void 
  {
    this._input = this.ProcessInput();
    this.SetVelocity(this._input); 

    this._velocity = Vector2.Lerp(this._velocity, Vector2.Zero(), this.DRAG_COEFFICIENT);

    const currentX = parseFloat(this._element.style.left) || 0;
    const currentY = parseFloat(this._element.style.top) || 0;

    const newX = currentX + (this._velocity.x * this._maxSpeed);
    const newY = currentY + (this._velocity.y * this._maxSpeed);

    this._element.style.left = newX + "px";
    this._element.style.top = newY + "px";
  }
  
  public SetVelocity(direction: Vector2): void
  {
    this._velocity = direction;
    this._velocity.Scale(this._maxSpeed);
  }

  private ProcessInput(): Vector2
  {
    const left = this._inputSystem.IsKeyDown("ArrowLeft");
    const right = this._inputSystem.IsKeyDown("ArrowRight");
    const up = this._inputSystem.IsKeyDown("ArrowUp");
    const down = this._inputSystem.IsKeyDown("ArrowDown");

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
