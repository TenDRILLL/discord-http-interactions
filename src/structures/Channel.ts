import {PartialChannel} from "./PartialChannel";
import {APIChannelBase, APIInteractionDataResolvedChannel} from "discord-api-types/v10";
import {ChannelType} from "discord-api-types/payloads/v10/channel";

export class Channel extends PartialChannel {
    public flags: number | null;
    constructor(raw: APIChannelBase<ChannelType.DM | ChannelType.GroupDM | ChannelType.GuildAnnouncement | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.AnnouncementThread | ChannelType.GuildText | ChannelType.GuildForum | ChannelType.GuildVoice> | APIInteractionDataResolvedChannel){
        super(raw);
        this.flags = "flags" in raw && raw.flags !== undefined ? raw.flags : null;
    }
}