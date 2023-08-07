import {MathUtils} from './Math';

export class Vector2
{
  public x: number;
  public y: number;

  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }
  
  public Copy(): Vector2
  {
    return new Vector2(this.x, this.y); 
  }

  static Scale(value: Vector2, scale: number): Vector2
  {
    return new Vector2(value.x * scale, value.y * scale);
  }

  public Scale(value: number): void
  {
    this.x *= value;
    this.y *= value;
  }

  public static Subtract(a: Vector2, b: Vector2): Vector2
  {
    if(a === null)
    {
      throw new Error("a in Vector2.Subtract is null");
    }

    if(b === null)
    {
      throw new Error("b in Vector2.Subtract is null");
    }
    return new Vector2(a.x - b.x, a.y - b.y);
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

    if(magnitude === 0)
    {
      return Vector2.Zero();
    }
    return new Vector2(vector.x/magnitude, vector.y/magnitude);
  }
  // todo: methods that need to be added 
  //
  // Dot
  //
  //
  //
  //
  //

};


