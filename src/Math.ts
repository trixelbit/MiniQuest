export class Math
{
  static Lerp(a:number, b:number, p:number): number
  {
    const addition = (b-a) * p;

    return a + addition;
  }
}
