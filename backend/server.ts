import * as express from 'express';
import {Routes} from "./routes";

class Server {

    public app: express.Application;
    public readonly port: number = process.env.PORT || 8888;

    public static bootstrap: Function = () : Server => new Server();

    constructor()
    {
        this.app = express();
        this.app.listen(this.port);
        this.routes();
    }

    private routes() : void
    {
        this.app.use(Routes);
    }
}

Server.bootstrap();