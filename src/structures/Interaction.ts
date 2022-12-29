import {APIInteraction, APIPingInteraction, Routes} from "discord-api-types/v10";
import Client from "../Client";
import {GuildMember} from "./GuildMember";
import {User} from "./User";
import {Message} from "./Message";
import {AutocompleteChoice, InteractionDeferData, InteractionReplyData} from "./InteractionReplyDataType";

export class Interaction {
    public id: string;
    public applicationId: string;
    public type: number;
    public guildId: string | null;
    public channelId: string | null;
    public member: GuildMember | null;
    public user: User | null;
    public token: string;
    public version: number;
    public appPermissions: string | null;
    public locale: string;
    public guildLocale: string | null;
    //public data: InteractionData; EXTEND and create there.
    public message: Message | null;
    public client: Client;

    constructor(raw: Exclude<APIInteraction,APIPingInteraction>, client: Client) {
        this.id = raw.id;
        this.applicationId = raw.application_id;
        this.type = raw.type;
        this.guildId = raw.guild_id ?? null;
        this.channelId = raw.channel_id ?? null;
        this.member = raw.member ? new GuildMember(raw.member) : null;
        this.user = raw.user ? new User(raw.user) : null;
        this.token = raw.token;
        this.version = raw.version;
        this.appPermissions = raw.app_permissions ?? null;
        this.locale = raw.locale!;
        this.guildLocale = raw.guild_locale ?? null;
        this.message = raw.message ? new Message(raw.message) : null;
        this.client = client;
    }

    reply(data: InteractionReplyData){
        data = this._formatData(data);
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token),{body: {type: 4, data}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    newMessage(data: InteractionReplyData){
        data = this._formatData(data);
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.channelMessages(this.channelId!),{body: data});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    editReply(data: InteractionReplyData){
        data = this._formatData(data);
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.patch(Routes.webhookMessage(this.applicationId,this.token,"@original"),{body: data});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    defer(data?: InteractionDeferData){
        if(data === undefined) data = {};
        data = this._formatData(data);
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token),{body: {type: 5, data}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    deferUpdate(){
        const data = {};
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token), {body: {type: 6, data}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    update(data: InteractionReplyData){
        data = this._formatData(data);
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token), {body: {type: 7, data}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    delete(){
        return new Promise(async (res,rej)=>{
            try {
                await this.client.rest.post(Routes.interactionCallback(this.id,this.token), {body: {type: 6}});
                const reply = await this.client.rest.delete(Routes.webhookMessage(this.applicationId,this.token,"@original"));
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    autocomplete(data: AutocompleteChoice[]){
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token),{body: {type: 8, data: {choices: data}}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }

    /*modal(modal: Modal){
        return new Promise(async (res,rej)=>{
            try {
                const reply = await this.client.rest.post(Routes.interactionCallback(this.id,this.token), {body: {type: 9, modal}});
                res(reply);
            } catch(e){
                rej(e);
            }
        });
    }*/

    _formatData(data){
        data["flags"] = 0;
        if("ephemeral" in data && data.ephemeral === true){
            data["flags"] |= 1 << 6;
            delete data.ephemeral;
        }
        if("suppressEmbeds" in data && data.suppressEmbeds === true){
            data["flags"] |= 1 << 2;
            delete data.suppressEmbeds;
        }
        return data;
    }
}