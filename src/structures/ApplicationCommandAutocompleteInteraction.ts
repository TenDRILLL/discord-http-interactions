import {Interaction} from "./Interaction";
import {APIApplicationCommandAutocompleteInteraction} from "discord-api-types/v10";
import Client from "../Client";

export class ApplicationCommandAutocompleteInteraction extends Interaction{
    public data: null;

    constructor(raw: APIApplicationCommandAutocompleteInteraction, client: Client) {
        super(raw, client);
        this.data = null;
    }
}