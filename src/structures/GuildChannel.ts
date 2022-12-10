import {Channel} from "./Channel";
import {Snowflake} from "discord-api-types/globals";
import {APIGuildChannel} from "discord-api-types/v10";
import {ChannelType} from "discord-api-types/payloads/v10/channel";
import {Overwrite} from "./Overwrite";

export class GuildChannel extends Channel {
    guildId: Snowflake | null;
    permissionOverwrites: Overwrite[] | null;
    position: number;
    parentId: Snowflake | null;
    nsfw: boolean | null;

    constructor(raw: APIGuildChannel<ChannelType.GuildAnnouncement | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.AnnouncementThread | ChannelType.GuildText | ChannelType.GuildForum | ChannelType.GuildVoice>) {
        super(raw);
        this.guildId = raw.guild_id ?? null;
        this.permissionOverwrites = raw.permission_overwrites ? raw.permission_overwrites.map(rawOverwrite => new Overwrite(rawOverwrite)) : null;
        this.position = raw.position;
        this.parentId = raw.parent_id ?? null;
        this.nsfw = raw.nsfw ?? null;
    }
}