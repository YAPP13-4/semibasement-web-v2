import { SEBA } from 'domain/services';
import { RepositoryDependencies } from 'domain/repositories';
import { CurationMusicRepository } from 'domain/repositories/music/curation';
import { MusicCuratingListApiProvider } from 'application/api/music/curation';

export class Context {
	public service: SEBA;

	constructor() {
		this.service = new SEBA(
			new RepositoryDependencies(
				new CurationMusicRepository(new MusicCuratingListApiProvider()),
			),
		);
	}
}
