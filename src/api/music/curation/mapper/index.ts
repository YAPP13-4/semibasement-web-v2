import { Music } from 'domain/entity/music';
import { MusicianInfo } from 'domain/entity/musician';
import { MusicInfo } from 'domain/entity/musicInfo';

export class CurationMusicMapper {
  public fromJson = (json: any): Music => {
    return new Music(
      json.id,
      new MusicianInfo(json.musician, json.musicianImg),
      new MusicInfo(
        json.title,
        json.description,
        json.artworkImg,
        json.duration,
        json.streamUrl,
        json.playCount,
        json.createdAtSoundCloud,
        json.createdAt,
      ),
    );
  };
}
