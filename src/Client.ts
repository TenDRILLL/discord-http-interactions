import {EventEmitter} from "events";
import express from "express";
import {AppRequests} from "./AppRequests";
import {REST} from "@discordjs/rest";

export class Client extends EventEmitter {
    private token: string;
    public publicKey: string;
    private port: number;
    public endpoint: string;
    public app;
    private requests;
    public rest;

    constructor(params){
        super();
        this._validateParams(params);
        this.token = params.token;
        this.publicKey = params.publicKey;
        this.port = params.port;
        this.endpoint = params.endpoint;
        this.app = express();
        this.requests = new AppRequests(this);
        this.rest = new REST({version: "10"}).setToken(this.token);
    }

    _validateParams(params){
        if(!(params["token"])) console.warn("NO_TOKEN_PROVIDED: No Token provided in the Client Constructor. This will restrict certain functionalities.");
        if(!(params["publicKey"])) throw new Error("NO_PUBLIC_KEY_PROVIDED: No Public Key provided in the Client Constructor.");
        if(!(params["endpoint"])) throw new Error("NO_ENDPOINT_PROVIDED: No Endpoint provided in the Client Constructor.");
        if(!(params["port"])) throw new Error("NO_PORT_PROVIDED: No Port provided in the Client Constructor.");
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