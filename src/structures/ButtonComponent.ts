import {APIButtonComponentWithCustomId, APIButtonComponentWithURL} from "discord-api-types/v10";
import {PartialEmoji} from "./PartialEmoji";

export class ButtonComponent {
    public type: number;
    public style: number;
    public label: string | null;
    public emoji: PartialEmoji | null;
    public customId: string | null;
    public url: string | null;
    public disabled: boolean | null;

    constructor(raw: APIButtonComponentWithURL | APIButtonComponentWithCustomId) {
        this.type = raw.type;
        this.style = raw.style;
        this.label = raw.label ?? null;
        this.emoji = raw.emoji ? new PartialEmoji(raw.emoji) : null;
        this.customId = raw["custom_id"] ?? null;
        this.url = raw["url"] ?? null;
        this.disabled = raw.disabled ?? null;
    }
}