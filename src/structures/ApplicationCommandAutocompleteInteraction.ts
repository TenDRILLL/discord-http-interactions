import {Interaction} from "./Interaction";
import {APIApplicationCommandAutocompleteInteraction} from "discord-api-types/v10";
import Client from "../Client";
import {ApplicationCommandInteractionData} from "./ApplicationCommandInteraction";

export class ApplicationCommandAutocompleteInteraction extends Interaction{
    public data: ApplicationCommandInteractionData;
    public commandName: string;

    constructor(raw: APIApplicationCommandAutocompleteInteraction, client: Client) {
        super(raw, client);
        this.data = new ApplicationCommandInteractionData(raw.data);
        this.commandName = this.data.name;
    }
}