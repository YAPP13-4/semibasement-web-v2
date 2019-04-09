import { Entity } from 'domain/entity';

export class MusicInfo extends Entity {
  public title: string;
  public description: string;
  public artworkImg: string;
  public duration: number;
  public streamUrl: string;
  public playCount: number;
  public createdAtSoundCloud: Date;
  public createdAt: Date;

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
