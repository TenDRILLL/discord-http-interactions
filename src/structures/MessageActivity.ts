import {APIMessageActivity} from "discord-api-types/v10";

export class MessageActivity {
    public type: number;
    public party_id: string | null;

    constructor(raw: APIMessageActivity) {
        this.type = raw.type;
        this.party_id = raw.party_id ?? null;
    }
}