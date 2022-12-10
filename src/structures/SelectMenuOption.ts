import {PartialEmoji} from "./PartialEmoji";
import {APISelectMenuOption} from "discord-api-types/v10";

export class SelectMenuOption {
    label: string;
    value: string;
    description: string | null;
    emoji: PartialEmoji | null;
    default: boolean | null;

    constructor(raw: APISelectMenuOption) {
        this.label = raw.label;
        this.value = raw.value;
        this.description = raw.description ?? null;
        this.emoji = raw.emoji ? new PartialEmoji(raw.emoji) : null;
        this.default = raw.default ?? null;
    }

}