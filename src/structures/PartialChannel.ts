import {APIPartialChannel} from "discord-api-types/v10";

export class PartialChannel {
    public type: number;
    public id: string;
    public name: string | null;

    constructor(raw: APIPartialChannel){
        this.type = raw.type;
        this.id = raw.id;
        this.name = raw.name ?? null;
    }
}