import { SEBA } from 'domain/services';
import { RepositoryDependencies } from 'domain/repositories';

export class Context {
  public service: SEBA;

  constructor() {
    this.service = new SEBA(new RepositoryDependencies());
  }
}
