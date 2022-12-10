import {APISelectMenuComponent} from "discord-api-types/v10";

export class SelectMenuComponent {
    public type: number;
    public customId: string;
    public placeholder: string | null;
    public minValues: number | null;
    public maxValues: number | null;
    public disabled: boolean | null;

    constructor(raw: APISelectMenuComponent) {
        this.customId = raw.custom_id;
        this.placeholder = raw.placeholder ?? null;
        this.minValues = raw.min_values ?? null;
        this.maxValues = raw.max_values ?? null;
        this.disabled = raw.disabled ?? null;
        this.type = raw.type;
    }
}