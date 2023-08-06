export interface IComponent
{
    Start(): void;

    Update(): void;
}


export class Entity
{
  private _id: string = crypto.randomUUID(); 

  private _components: IComponent[];
 
  protected _element: HTMLImageElement;

  /**
  * @param {string} name Name of Entity
  * @param {IComponent[]} components Array of Components this should contain.
  **/
  constructor(name: string, components: IComponent[] = [])
  {
    this._element = document.createElement("img");
    this._element.style.position = "absolute";
    this._element.style.scale = "200%";
    this._element.style.imageRendering = "pixelated";
    this._element.id = name + " - " + this._id;
    this._element.src = "";
    this._element.style.zIndex = "10"; 
    document.body.appendChild(this._element);

    this._components = components;
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
};





