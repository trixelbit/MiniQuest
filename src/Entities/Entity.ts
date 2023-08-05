export interface IComponent
{
    Start(): void;

    Update(): void;
}


export class Entity
{
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
    this._element.id = name;
    this._element.src = "";
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





