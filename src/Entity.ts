import {Vector2} from "./Vector2";
import {InputSystem} from "./InputSystem";

export class Entity
{
  private _element: HTMLElement;
  private _speed: number;
  private _velocity: Vector2; 
  private DRAG_COEFFICIENT: number = 0.05;
  private _inputSystem: InputSystem;

  constructor(element: HTMLElement, speed: number, inputSystem: InputSystem)
  {
    this._element = element;
    this._speed = speed;
    this._velocity = new Vector2(0,0);
    this._inputSystem = inputSystem;
  }

  public Move(direction: Vector2): void
  {
    this._velocity = direction;
    this._velocity.Scale(this._speed);
  }

  public Update(): void
  {
    this.ProcessInput();

    this._velocity = Vector2.Lerp(this._velocity, Vector2.Zero(), this.DRAG_COEFFICIENT);

    const currentX = parseFloat(this._element.style.left) || 0;
    const currentY = parseFloat(this._element.style.top) || 0;

    const newX = currentX + (this._velocity.x * this._speed);
    const newY = currentY + (this._velocity.y * this._speed);

    this._element.style.left = newX + "px";
    this._element.style.top = newY + "px";

  }

  private ProcessInput(): void
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

    this.Move(new Vector2(x, y));
  }
};

