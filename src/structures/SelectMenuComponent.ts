import {APISelectMenuComponent} from "discord-api-types/v10";

export class SelectMenuComponent {
    public type: number;
    public custom_id: string;
    public placeholder: string | null;
    public min_values: number | null;
    public max_values: number | null;
    public disabled: boolean | null;

    constructor(raw: APISelectMenuComponent) {
        this.custom_id = raw.custom_id;
        this.placeholder = raw.placeholder ?? null;
        this.min_values = raw.min_values ?? null;
        this.max_values = raw.max_values ?? null;
        this.disabled = raw.disabled ?? null;
        this.type = raw.type;
    }
}