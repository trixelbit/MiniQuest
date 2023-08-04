import { InputSystem } from "./InputSystem";

class Vector2
{
  x: number;
  y: number;

  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }

  public Scale(value: number): void
  {
    this.x *= value;
    this.y *= value;
  }
};


class Entity
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

    this._velocity.x = Lerp(this._velocity.x, 0, this.DRAG_COEFFICIENT);
    this._velocity.y = Lerp(this._velocity.y, 0, this.DRAG_COEFFICIENT);
    
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


function Lerp(a:number, b:number, p:number): number
{
  const addition = (b-a) * p;

  return a + addition;

}


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

