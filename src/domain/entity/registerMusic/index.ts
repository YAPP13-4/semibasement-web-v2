import { Entity } from 'domain/entity';
import { Music } from 'domain/entity/music';

export class RegisterMusic extends Entity {
  private music: Music;
  private url: string;
  private lyrics: string;

  public constructor(music: Music, url: string, lyrics: string) {
    super();
    this.music = music;
    this.url = url;
    this.lyrics = lyrics;
  }
}
