import {Interaction} from "./Interaction";
import {APIApplicationCommandInteraction, APIApplicationCommandInteractionData} from "discord-api-types/v10";
import Client from "../Client";
import {ApplicationCommandInteractionOption} from "./ApplicationCommandInteractionOption";
import {ResolvedData} from "./ResolvedData";

export class ApplicationCommandInteraction extends Interaction {
    public data: ApplicationCommandInteractionData;
    public commandName: string;
    constructor(raw: APIApplicationCommandInteraction, client: Client) {
        super(raw, client);
        this.data = new ApplicationCommandInteractionData(raw.data);
        this.commandName = this.data.name;
    }
}

export class ApplicationCommandInteractionData {
    public id: string;
    public name: string;
    public type: number;
    public resolved: ResolvedData | null;
    public options: ApplicationCommandInteractionOption[] | null;
    public guildId: string | null;
    public targetId: string | null;

    constructor(raw: APIApplicationCommandInteractionData) {
        this.id = raw.id;
        this.name = raw.name;
        this.type = raw.type;
        this.resolved = raw.resolved ? new ResolvedData(raw.resolved) : null;
        this.options = "options" in raw && raw.options !== undefined ? raw.options.map(rawOption => new ApplicationCommandInteractionOption(rawOption)) : null;
        this.guildId = raw.guild_id ?? null;
        this.targetId = "target_id" in raw ? raw.target_id : null;
    }
}