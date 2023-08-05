import {MathUtils} from './Math';

export class Vector2
{
  x: number;
  y: number;

  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }
  
  public Copy(): Vector2
  {
    return new Vector2(this.x, this.y); 
  }

  public Scale(value: number): void
  {
    this.x *= value;
    this.y *= value;
  }

  public Magnitude(): number
  {
    return Vector2.Distance(Vector2.Zero(), this);
  }

  public static Distance(a: Vector2, b: Vector2): number
  {
    return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y,2));
  }

  static Lerp(a: Vector2, b: Vector2, p:number): Vector2
  {
    return new Vector2(
      MathUtils.Lerp(a.x, b.x, p),
      MathUtils.Lerp(a.y, b.y, p));
  }

  static Zero(): Vector2
  {
    return new Vector2(0,0);
  }


  public static Normalized(vector: Vector2): Vector2
  {
    var magnitude = vector.Magnitude();

    return new Vector2(vector.x/magnitude, vector.y/magnitude);
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


