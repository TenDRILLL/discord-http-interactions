import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIChannelSelectComponent} from "discord-api-types/v10";
import SelectMenuType from "./SelectMenuType";

export default class ChannelSelectMenu extends SelectMenuComponent {
    public channel_types: number[] | null;

    constructor(raw?: APIChannelSelectComponent) {
        super(raw);
        this.channel_types = raw?.channel_types ?? null;
        this.type = SelectMenuType.Channel;
    }

    setChannelTypes(types: number[]): ChannelSelectMenu {
        this.channel_types = types;
        return this;
    }
}