import { MusicCuratingListApiProvider } from 'application/api/music';
import { MusicCurationRepository } from './music/musicCurationRepository';

export class RepositoryDependencies {
  private curationMusic: MusicCurationRepository;

  public constructor() {
    this.curationMusic = new MusicCurationRepository(new MusicCuratingListApiProvider());
  }

  public getCurationMusic = () => this.curationMusic;
}
