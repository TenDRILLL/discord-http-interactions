import {APIStickerItem} from "discord-api-types/v10";

export class StickerItem {
    public id: string;
    public name: string;
    public format_type: number;

    constructor(raw: APIStickerItem) {
        this.id = raw.id;
        this.name = raw.id;
        this.format_type = raw.format_type;
    }
}