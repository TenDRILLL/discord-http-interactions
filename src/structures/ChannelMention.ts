export class ChannelMention {
    public id: string;
    public guildId: string;
    public type: number;
    public name: string;

    constructor(raw: APIChannelMention){
        this.id = raw.id;
        this.guildId = raw.guild_id;
        this.type = raw.type;
        this.name = raw.name;
    }
}