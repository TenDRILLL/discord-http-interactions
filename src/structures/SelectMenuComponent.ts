import {APISelectMenuComponent} from "discord-api-types/v10";

export class SelectMenuComponent {
    public type: number | null;
    public custom_id: string | null;
    public placeholder: string | null;
    public min_values: number | null;
    public max_values: number | null;
    public disabled: boolean | null;

    constructor(raw?: APISelectMenuComponent) {
        this.custom_id = raw?.custom_id ?? null;
        this.placeholder = raw?.placeholder ?? null;
        this.min_values = raw?.min_values ?? null;
        this.max_values = raw?.max_values ?? null;
        this.disabled = raw?.disabled ?? null;
        this.type = raw?.type ?? null;
    }

    setCustomId(id: string): SelectMenuComponent {
        this.custom_id = id;
        return this;
    }

    setPlaceholder(placeholder: string): SelectMenuComponent {
        this.placeholder = placeholder;
        return this;
    }

    setMinValues(min: number): SelectMenuComponent {
        this.min_values = min;
        return this;
    }

    setMaxValues(max: number): SelectMenuComponent {
        this.max_values = max;
        return this;
    }

    setDisabled(isDisabled: boolean): SelectMenuComponent {
        this.disabled = isDisabled;
        return this;
    }
}