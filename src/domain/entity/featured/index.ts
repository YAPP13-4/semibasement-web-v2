import { Entity } from 'domain/entity';

export class Featured extends Entity {
  private type: string;
  private count: number;

  public constructor(type: string, count: number) {
    super();
    this.type = type;
    this.count = count;
  }
}
