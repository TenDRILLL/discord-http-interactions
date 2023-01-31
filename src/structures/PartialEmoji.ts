import {APIMessageComponentEmoji, APIPartialEmoji} from "discord-api-types/v10";

export class PartialEmoji {
    public id: string | null;
    public name: string | null;
    public animated: boolean | null;

    constructor(raw: APIPartialEmoji | APIMessageComponentEmoji | PartialEmoji) {
        this.id = raw.id ?? null;
        this.name = raw.name ?? null;
        this.animated = raw.animated ?? null;
    }
}

export class RawPartialEmoji {
    public id: string | null;
    public name: string | null;
    public animated: boolean | null;
}