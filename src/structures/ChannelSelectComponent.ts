import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIChannelSelectComponent} from "discord-api-types/v10";

export class ChannelSelectComponent extends SelectMenuComponent{
    public channelTypes: number[] | null;

    constructor(raw: APIChannelSelectComponent) {
        super(raw);
        this.channelTypes = raw.channel_types ?? null;
    }
}