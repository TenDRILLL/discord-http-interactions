import {APIStickerItem} from "discord-api-types/v10";

export class StickerItem {
    public id: string;
    public name: string;
    public formatType: number;

    constructor(raw: APIStickerItem){
        this.id = raw.id;
        this.name = raw.id;
        this.formatType = raw.format_type;
    }
}