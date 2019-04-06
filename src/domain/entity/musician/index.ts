import { Entity } from 'domain/entity';

export class MusicianInfo extends Entity {
  private musician: string;
  private musicianImg: string;

  public constructor(musician: string, musicianImg: string) {
    super();
    this.musician = musician;
    this.musicianImg = musicianImg;
  }
}
