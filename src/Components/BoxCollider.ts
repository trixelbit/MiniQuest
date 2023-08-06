import {Component, Entity} from "../Entities/Entity";
import { Vector2 } from "../Vector2";

export class BoxCollider extends Component
{
  private _size: Vector2;

  get Size(): Vector2
  {
    return this._size.Copy();
  }

  constructor(entity: Entity, size: Vector2)
  {
    super(entity);

    this._size = size;
  }
}
