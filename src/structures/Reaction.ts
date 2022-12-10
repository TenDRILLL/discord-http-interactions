import {APIReaction} from "discord-api-types/v10";
import {PartialEmoji} from "./PartialEmoji";

export class Reaction {
    public count: number;
    public me: boolean;
    public emoji: PartialEmoji;

    constructor(raw: APIReaction) {
        this.count = raw.count;
        this.me = raw.me;
        this.emoji = new PartialEmoji(raw.emoji);
    }
}