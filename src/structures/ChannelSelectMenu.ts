import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIChannelSelectComponent} from "discord-api-types/v10";

export class ChannelSelectMenu extends SelectMenuComponent {
    public channel_types: number[] | null;

    constructor(raw?: APIChannelSelectComponent) {
        super(raw);
        this.channel_types = raw?.channel_types ?? null;
    }

    setChannelTypes(types: number[]): ChannelSelectMenu {
        this.channel_types = types;
        return this;
    }
}