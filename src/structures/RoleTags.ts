import {APIRoleTags} from "discord-api-types/v10";

export class RoleTags {
    public bot_id: string | null;
    public integration_id: string | null;
    public premium_subscriber: null;

    constructor(raw: APIRoleTags) {
        this.bot_id = raw.bot_id ?? null;
        this.integration_id = raw.integration_id ?? null;
        this.premium_subscriber = raw.premium_subscriber ?? null;
    }
}