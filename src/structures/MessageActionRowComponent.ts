import {APIMessageActionRowComponent} from "discord-api-types/v10";

export class MessageActionRowComponent {
    public type: number;
    constructor(raw: APIMessageActionRowComponent) {
        this.type = raw.type;
    }
}