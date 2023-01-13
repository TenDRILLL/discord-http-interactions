import {Interaction} from "./Interaction";
import {
    APIModalSubmitInteraction
} from "discord-api-types/v10";
import Client from "../Client";
import Modal from "./Modal";

export class ModalSubmitInteraction extends Interaction {
    public data: Modal;
    public customId: string;

    constructor(raw: APIModalSubmitInteraction, client: Client) {
        super(raw, client);
        this.data = new Modal(raw.data);
        this.customId = this.data.custom_id!;
    }
}