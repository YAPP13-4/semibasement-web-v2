import { MusicContext, UserContext } from 'application/@context/context';

class SebaApplication {
    public musicContext: MusicContext;
    public userContext: UserContext;

    constructor() {
        this.musicContext = new MusicContext();
        this.userContext = new UserContext();
    }
}

export const Application = new SebaApplication();
