import { createStandardAction } from 'typesafe-actions';
import { Music } from 'domain/entity/music';

const REQUEST = 'SEBA_MUSIC/REQUEST';
const SUCCESS = 'SEBA_MUSIC/SUCCESS';

export const requestSebaCurationMusicLists = createStandardAction(REQUEST)<
	undefined
>();

export const successSebaCurationMusicLists = createStandardAction(SUCCESS)<
	Music
>();
