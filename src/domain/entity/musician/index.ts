import { Entity } from 'domain/entity';

export class MusicianInfo extends Entity {
  public name: string;
  public musicianImg: string;

  public constructor(name: string, musicianImg: string) {
    super();
    this.name = name;
    this.musicianImg = musicianImg;
  }
}
