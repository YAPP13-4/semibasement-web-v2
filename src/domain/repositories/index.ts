import { MusicCuratingListApiProvider } from 'application/api/music/curation';
import { CurationMusicRepository } from './music/curation';

export class RepositoryDependencies {
  private curationMusic: CurationMusicRepository;

  public constructor() {
    this.curationMusic = new CurationMusicRepository(new MusicCuratingListApiProvider());
  }

  public getCurationMusic = () => this.curationMusic;
}
