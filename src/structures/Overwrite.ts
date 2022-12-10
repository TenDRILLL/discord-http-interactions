import {APIOverwrite} from "discord-api-types/v10";

export class Overwrite {
    public id: string;
    public type: number;
    public allow: string;
    public deny: string;

    constructor(raw: APIOverwrite) {
        this.id = raw.id;
        this.type = raw.type;
        this.allow = raw.allow;
        this.deny = raw.deny;
    }

}