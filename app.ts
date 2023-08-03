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


  constructor(element: HTMLElement, speed: number)
  {
    this._element = element;
    this._speed = speed;
    this._velocity = new Vector2(0,0);
  }

  public Move(direction: Vector2): void
  {
    this._velocity = direction;
    this._velocity.Scale(this._speed);
  }

  public Update(): void
  {
    this._velocity.x = Lerp(this._velocity.x, 0, this.DRAG_COEFFICIENT);
    this._velocity.y = Lerp(this._velocity.y, 0, this.DRAG_COEFFICIENT);
    
    const currentX = parseFloat(this._element.style.left) || 0;
    const currentY = parseFloat(this._element.style.top) || 0;

    const newX = currentX + (this._velocity.x * this._speed);
    const newY = currentY + (this._velocity.y * this._speed);

    this._element.style.left = newX + "px";
    this._element.style.top = newY + "px";

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

const player = new Entity(playerElement, 2);


document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch(event.key)
    {
      case "ArrowUp":
        player.Move(new Vector2(0, -1));
        break;

      case "ArrowDown":
        player.Move(new Vector2(0, 1));
        break;

      case "ArrowRight":
        player.Move(new Vector2(1, 0));
        break;

      case "ArrowLeft":
        player.Move(new Vector2(-1, 0));
        break;

      default:
    }
  })
});



async function GameLoop()
{
  while(true)
  {
    await new Promise(resolve => setTimeout(resolve, 10));
    player.Update();
  }
}

GameLoop();

