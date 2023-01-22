import {EventEmitter} from "events";
import express from "express";
import {AppRequests} from "./AppRequests";
import {REST} from "@discordjs/rest";
import {Routes} from "discord-api-types/v10";
import Embed from "./structures/Embed";
import {AllowedMentions} from "./structures/AllowedMentions";
import {MessageReference} from "./structures/MessageReference";
import ActionRow from "./structures/ActionRow";
import {Attachment} from "./structures/Attachment";
import ApplicationCommandObject from "./structures/ApplicationCommandObject";
import {GuildMember} from "./structures/GuildMember";

export default class Client extends EventEmitter {
    private readonly token: string | null;
    public publicKey: string;
    public port: number;
    public endpoint: string;
    public additionalEndpoints?: {name: string, endpoint: string, method: string}[];
    public app;
    private requests;
    public rest;

    constructor(params: ParameterObject){
        super();
        this._validateParams(params);
        this.token = params.token;
        this.publicKey = params.publicKey;
        this.port = params.port;
        this.endpoint = params.endpoint;
        this.additionalEndpoints = params.additionalEndpoints;
        this.app = express();
        this.requests = new AppRequests(this);
        this.rest = new REST({version: "10"}).setToken(this.token);
    }

    _validateParams(params){
        for(const key of ["token","publicKey","endpoint","port"]){
            if(!params[key]) throw new Error(`NO_${key.toUpperCase()}_PROVIDED: No ${key} provided in the Client Constructor.`);
        }
    }

    login(){
        this.requests.listener();
        this.app.listen(this.port,(e)=>{
            e ? this.emit("error",e) : this.emit("ready");
        });
    }

    newMessage(channelId: string, data: MessageCreateData){
        if(data.suppressEmbeds){
            data["suppress_embeds"] = data.suppressEmbeds;
            delete data.suppressEmbeds;
        }
        return new Promise(async (res, rej) => {
            try {
                const x = await this.rest.post(Routes.channelMessages(channelId),{body: data});
                res(x);
            } catch(e) {
                rej(e);
            }
        });
    }

    registerCommands(applicationId: string, commands: ApplicationCommandObject[], guildId?: string){
        return new Promise(async (res,rej)=>{
            try {
                if(guildId){
                    const x = await this.rest.put(Routes.applicationGuildCommands(applicationId,guildId),{body: commands});
                    res(x);
                } else {
                    const x = await this.rest.put(Routes.applicationCommands(applicationId),{body: commands});
                    res(x);
                }
            } catch(e){
                rej(e);
            }
        });
    }

    getMember(guildId:string, memberId:string): Promise<GuildMember>{
        return new Promise(async (res,rej)=>{
            try {
                const member = await this.rest.get(Routes.guildMember(guildId,memberId));
                res(new GuildMember(member));
            } catch(e){
                rej(e);
            }
        });
    }

    setMember(guildId:string, memberId: string, data: GuildMemberModifyData){
        return new Promise(async (res,rej)=>{
            try {
                const x = await this.rest.patch(Routes.guildMember(guildId,memberId),{body: data});
                res(x);
            } catch(e){
                rej(e);
            }
        });
    }
}

export class ParameterObject {
    public token: string;
    public publicKey: string;
    public port: number;
    public endpoint: string;
    public additionalEndpoints?: {name: string, endpoint: string, method: string}[];
}

export class MessageCreateData {
    content?: string;
    nonce?: number | string;
    tts?: boolean;
    embeds?: Embed[];
    allowedMentions?: AllowedMentions;
    message_reference?: MessageReference;
    components?: ActionRow[];
    sticker_ids?: string[];
    files?: null;
    payload_json?: null;
    attachments?: Attachment[];
    suppressEmbeds?: boolean;
}

export class GuildMemberModifyData {
    nick?: string;
    roles?: string[];
    mute?: boolean;
    deaf?: boolean;
    channel_id?: string;
    communication_disabled_until?: string;
}