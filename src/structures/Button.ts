import {APIButtonComponentWithCustomId, APIButtonComponentWithURL, APIPartialEmoji} from "discord-api-types/v10";
import {PartialEmoji, RawPartialEmoji} from "./PartialEmoji";
import MessageComponentType from "./MessageComponentType";

export default class Button {
    public type: number;
    public style: number | null;
    public label: string | null;
    public emoji?: PartialEmoji;
    public custom_id?: string;
    public url?: string;
    public disabled: boolean;

    constructor(raw?: APIButtonComponentWithURL | APIButtonComponentWithCustomId) {
        this.type = MessageComponentType.Button;
        this.style = raw?.style ?? null;
        this.label = raw?.label ?? null;
        if(raw){
            if(raw.emoji){
                this.emoji = new PartialEmoji(raw.emoji);
            }
            if("custom_id" in raw){
                this.custom_id = raw.custom_id;
            }
            if("url" in raw){
                this.url = raw.url;
            }
        }
        this.disabled = raw?.disabled ?? false;
    }

    setStyle(style: number): Button {
        this.style = style;
        return this;
    }

    setLabel(label: string): Button {
        this.label = label;
        return this;
    }

    setEmoji(emoji: PartialEmoji | RawPartialEmoji): Button {
        if(emoji instanceof RawPartialEmoji){
            emoji = new PartialEmoji(emoji as APIPartialEmoji);
        }
        this.emoji = emoji;
        return this;
    }

    setCustomId(id: string): Button {
        this.custom_id = id;
        return this;
    }

    setUrl(url: string): Button {
        this.url = url;
        return this;
    }

    setDisabled(disabled: boolean): Button {
        this.disabled = disabled;
        return this;
    }
}