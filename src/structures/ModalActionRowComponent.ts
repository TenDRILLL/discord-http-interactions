import {APIModalActionRowComponent} from "discord-api-types/v10";

export class ModalActionRowComponent {
    public type: number;

    constructor(raw?: APIModalActionRowComponent) {
        this.type = raw?.type ?? 4;
    }
}