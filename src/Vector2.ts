import {Math} from './Math';

export class Vector2
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

  static Lerp(a: Vector2, b: Vector2, p:number): Vector2
  {
    return new Vector2(
      Math.Lerp(a.x, b.x, p),
      Math.Lerp(a.y, b.y, p));
  }

  static Zero(): Vector2
  {
    return new Vector2(0,0);
  }


  // todo: methods that need to be added 
  //
  // Distance
  //
  // Normalize
  //
  // Dot
  //
  //
  //
  //
  //

};


