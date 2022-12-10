import {APIMessageReference} from "discord-api-types/v10";

export class MessageReference {
    public messageId: string | null;
    public channelId: string;
    public guildId: string | null;
    //public failIfNotExists: boolean | null; //Discord API claims to have this, but DAPI doesn't. Therefore not implementing it.

    constructor(raw: APIMessageReference) {
        this.messageId = raw.message_id ?? null;
        this.channelId = raw.channel_id;
        this.guildId = raw.guild_id ?? null;
        //this.failIfNotExists = raw.fail_if_not_exists ?? null;
    }
}