import { CurationMusicRepository } from './music/curation';

export class RepositoryDependencies {
  private curationMusic: CurationMusicRepository;

  public constructor(curationMusic: CurationMusicRepository) {
    this.curationMusic = curationMusic;
  }

  public getCurationMusic = () => this.curationMusic;
}
