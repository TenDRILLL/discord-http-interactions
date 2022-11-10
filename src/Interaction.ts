import axios from "axios";

export class Interaction {
    appPermissions: string | null;
    applicationID: string;
    channelID: string;
    data: {
        id: string;
        name: string;
        type: number;
    };
    entitlementSkuIds: Array<string>;
    guildID: string;
    guildLocale: string;
    id: string;
    locale: string;
    member: {
        avatar: string | null;
        communicationDisabledUntil: string | null;
        deaf: boolean;
        flags: number;
        isPending: boolean;
        joinedAt: string;
        mute: boolean;
        nick: string;
        pending: boolean;
        permissions: string;
        premiumSince: string | null;
        roles: Array<string>;
        user: {
            avatar: string | null;
            avatarDecoration: string | null;
            discriminator: string;
            id: string;
            publicFlags: string | null;
            username: string;
        }
    }
    token: string;
    type: number;
    version: number;
    replied: boolean;

    constructor(raw){
        raw = JSON.parse(raw);
        this.appPermissions = raw.app_permissions ?? null;
        this.applicationID = raw.application_id;
        this.channelID = raw.channel_id;
        this.data = raw.data;
        this.entitlementSkuIds = raw.entitlement_sku_ids;
        this.guildID = raw.guild_id;
        this.guildLocale = raw.guild_locale;
        this.id = raw.id;
        this.locale = raw.locale;
        this.member = raw.member;
        this.token = raw.token;
        this.type = raw.type;
        this.version = raw.version;
        this.replied = false;
    }

    defer(){
        this.reply({
            type: 5
        });
    }

    update(){
        this.reply({
            type: 6
        });
    }

    showModal(modal){
        this.reply({
            type: 9,
            components: [modal]
        });
    }

    reply(data){
        let newData = {};
        let flags = 0; //SUPPRESS_EMBEDS 1 << 2 | EPHEMERAL 1 << 6
        if(data["ephemeral"] && data["ephemeral"] === true){
            flags += 1<<6;
        }
        if(data["suppressEmbeds"] && data["suppressEmbeds"] === true){
            flags += 1<<2;
        }
        if(data["content"]){
            newData["content"] = data.content;
        }
        if(data["components"]){
            newData["components"] = data.components;
        }
        if(data["embeds"]){
            newData["embeds"] = data.embeds;
        }
        if(data["allowedMentions"]){
            newData["allowed_mentions"] = data.allowedMentions;
        }
        newData["flags"] = flags;
        data = {
            type: data.type ?? 4,
            data: newData
        };
        return new Promise((res, rej)=>{
            axios.post(`https://discord.com/api/v10/interactions/${this.id}/${this.token}/callback`,data).then(()=>{
                this.replied = true;
                res(this);
            }).catch(e => {
                rej(e);
            });
        });
    }

    editReply(data){
        return new Promise((res,rej)=>{
            axios.patch(`https://discord.com/api/v10/webhooks/${this.applicationID}/${this.token}/messages/@original`,data).then(()=>{
                res(this);
            }).catch(e => {
                rej(e);
            })
        });
    }
}