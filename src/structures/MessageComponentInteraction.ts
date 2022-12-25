import {Interaction} from "./Interaction";
import Client from "../Client";
import {APIMessageComponentInteraction, APIMessageComponentInteractionData} from "discord-api-types/v10";

export class MessageComponentInteraction extends Interaction {
    public data: MessageComponentInteractionData;
    public custom_id: string;

    constructor(raw: APIMessageComponentInteraction, client: Client) {
        super(raw, client);
        this.data = new MessageComponentInteractionData(raw.data);
        this.custom_id = this.data.custom_id;
    }
}

export class MessageComponentInteractionData {
    public custom_id: string;
    public componentType: number;
    public values: string[] | null;

    constructor(raw: APIMessageComponentInteractionData) {
        this.custom_id = raw.custom_id;
        this.componentType = raw.component_type;
        this.values = "values" in raw ? raw.values : null;
    }
}