import { Entity } from 'domain/entity';

export class MusicInfo extends Entity {
  private title: string;
  private description: string;
  private artworkImg: string;
  private duration: number;
  private streamUrl: string;
  private playCount: number;
  private createdAtSoundCloud: Date;
  private createdAt: Date;

  public constructor(
    title: string,
    description: string,
    artworkImg: string,
    duration: number,
    streamUrl: string,
    playCount: number,
    createdAtSoundCloud: Date,
    createdAt: Date,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.artworkImg = artworkImg;
    this.duration = duration;
    this.streamUrl = streamUrl;
    this.playCount = playCount;
    this.createdAtSoundCloud = createdAtSoundCloud;
    this.createdAt = createdAt;
  }
}
