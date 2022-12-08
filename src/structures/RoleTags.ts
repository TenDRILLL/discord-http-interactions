import {APIRoleTags} from "discord-api-types/v10";

export class RoleTags {
    public botId: string | null;
    public integrationId: string | null;
    public premiumSubscriber: null;

    constructor(raw: APIRoleTags) {
        this.botId = raw.bot_id ?? null;
        this.integrationId = raw.integration_id ?? null;
        this.premiumSubscriber = raw.premium_subscriber ?? null;
    }
}