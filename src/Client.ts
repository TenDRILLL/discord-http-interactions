import {EventEmitter} from "events";
import express from "express";
import {AppRequests} from "./AppRequests";

export class Client extends EventEmitter {
    token: string;
    applicationID: string;
    publicKey: string;
    port: number;
    endpoint: string;
    app;
    requests;

    constructor(params){
        super();
        this._validateParams(params);
        this.token = params.token;
        this.applicationID = params.applicationID;
        this.publicKey = params.publicKey;
        this.port = params.port;
        this.endpoint = params.endpoint;
        this.app = express();
        this.requests = new AppRequests(this);
    }

    _validateParams(params){
        if(!(params["token"])) throw new Error("NO_TOKEN_PROVIDED: No Token provided in the Client Constructor.");
        if(!(params["applicationID"])) throw new Error("NO_APPLICATION_ID_PROVIDED: No Application ID provided in the Client Constructor.");
        if(!(params["publicKey"])) throw new Error("NO_PUBLIC_KEY_PROVIDED: No Public Key provided in the Client Constructor.");
        if(!(params["port"])) throw new Error("NO_PORT_PROVIDED: No Port provided in the Client Constructor.");
        if(!(params["endpoint"])) throw new Error("NO_ENDPOINT_PROVIDED: No Endpoint provided in the Client Constructor.");
    }

    login(){
        this.app.use(express.json({verify: this.requests.verifyDiscordRequest()}));
        this.requests.listener();
        this.app.listen(this.port,()=>{
            this.emit("ready");
        }).catch(e => {
            this.emit("error",e);
        });
    }
}