import { RepositoryDependencies } from 'domain/repositories';

export class SEBA {
	constructor(private repo: RepositoryDependencies) {}
	getCurationMusicList = () => this.repo.curationMusic.get();
}
