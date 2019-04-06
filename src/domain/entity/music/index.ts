import { Entity } from 'domain/entity';
import { MusicianInfo } from 'domain/entity/musician';
import { MusicInfo } from 'domain/entity/musicInfo';

export class Music extends Entity {
  private id: number;
  private musician: MusicianInfo;
  private music: MusicInfo;

  public constructor(id: number, musician: MusicianInfo, music: MusicInfo) {
    super();
    this.id = id;
    this.musician = musician;
    this.music = music;
  }
}
