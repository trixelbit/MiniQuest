import { Vector2 } from "../Vector2";

export interface IComponent
{
    Start(): void;

    Update(): void;
}

export class Component implements IComponent
{
  protected readonly Entity : Entity;

  constructor(entity: Entity)
  {
    this.Entity = entity;
  }

  public Start(): void
  {
    
  }

  public Update(): void
  {
    
  }
}

export class Entity
{
  private _id: string = crypto.randomUUID(); 

  private _components: IComponent[];
  
  public WorldPosition: Vector2;

  protected _element: HTMLImageElement;

  /**
  * @param {string} name Name of Entity
  * @param {IComponent[]} components Array of Components this should contain.
  **/
  constructor(name: string, position: Vector2 = Vector2.Zero())
  {
    this.WorldPosition = position;

    this._element = document.createElement("img");
    this._element.style.position = "absolute";
    this._element.style.scale = "200%";
    this._element.style.imageRendering = "pixelated";
    this._element.id = name + " - " + this._id;
    this._element.src = "";
    this._element.style.zIndex = "10"; 
    document.body.appendChild(this._element);

    this._components = [];
  }

  public AddComponent(component: IComponent): void
  {
    this._components.push(component);
  }

  public Start(): void
  {
    for(const component of this._components)
    {
        component.Start();
    }
  }

  public Update(): void
  {
    for(const component of this._components)
    {
      component.Update();
    }
  }

  public ApplyCameraPositionToElement(cameraPosition: Vector2): void
  {
    if(isNaN(cameraPosition.x))
    {
      console.log("cam pos is nan");
    }

    if(isNaN(this.WorldPosition.x))
    {
      console.log("world pos is nan");
    }

    console.log("Pre" + this.WorldPosition.x);
    const newValue = Vector2.Subtract(this.WorldPosition, cameraPosition);
    console.log("Post" + this.WorldPosition.x);
    this._element.style.top = newValue.y + "px";
    this._element.style.left = newValue.x + "px";
  }
};





