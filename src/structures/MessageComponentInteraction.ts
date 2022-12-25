import {Interaction} from "./Interaction";
import Client from "../Client";
import {APIMessageComponentInteraction, APIMessageComponentInteractionData} from "discord-api-types/v10";

export class MessageComponentInteraction extends Interaction {
    public data: MessageComponentInteractionData;
    public customId: string;

    constructor(raw: APIMessageComponentInteraction, client: Client) {
        super(raw, client);
        this.data = new MessageComponentInteractionData(raw.data);
        this.customId = this.data.customId;
    }
}

export class MessageComponentInteractionData {
    public customId: string;
    public componentType: number;
    public values: string[] | null;

    constructor(raw: APIMessageComponentInteractionData) {
        this.customId = raw.custom_id;
        this.componentType = raw.component_type;
        this.values = "values" in raw ? raw.values : null;
    }
}