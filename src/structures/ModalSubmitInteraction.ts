import {Interaction} from "./Interaction";
import {
    APIModalSubmission,
    APIModalSubmitInteraction,
    APIActionRowComponent,
    APIModalActionRowComponent
} from "discord-api-types/v10";
import Client from "../Client";
import ActionRow from "./ActionRow";

export class ModalSubmitInteraction extends Interaction {
    public data: ModalSubmitInteractionData;
    public custom_id: string;

    constructor(raw: APIModalSubmitInteraction, client: Client) {
        super(raw, client);
        this.data = new ModalSubmitInteractionData(raw.data);
        this.custom_id = this.data.custom_id;
    }
}

export class ModalSubmitInteractionData {
    public custom_id: string;
    public components: ActionRow[];

    constructor(raw: APIModalSubmission) {
        this.custom_id = raw.custom_id;
        this.components = raw.components.map(rawComponent => new ActionRow(rawComponent as APIActionRowComponent<APIModalActionRowComponent>));
    }
}