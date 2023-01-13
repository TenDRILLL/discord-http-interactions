import {APITextInputComponent} from "discord-api-types/v10";
import {ModalActionRowComponent} from "./ModalActionRowComponent";

export default class TextInput extends ModalActionRowComponent {
    style: number | null;
    custom_id: string | null;
    label: string | null;
    placeholder: string | null;
    value: string | null;
    min_length: number | null;
    max_length: number | null;
    required: boolean;

    constructor(raw?: APITextInputComponent) {
        super(raw);
        this.style = raw?.style ?? null;
        this.custom_id = raw?.custom_id ?? null;
        this.label = raw?.label ?? null;
        this.placeholder = raw?.placeholder ?? null;
        this.value = raw?.value ?? null;
        this.min_length = raw?.min_length ?? null;
        this.max_length = raw?.max_length ?? null;
        this.required = raw?.required ?? false;
    }

    setStyle(style: number): TextInput {
        this.style = style;
        return this;
    }

    setCustomId(id: string): TextInput {
        this.custom_id = id;
        return this;
    }

    setLabel(label: string): TextInput {
        this.label = label;
        return this;
    }

    setPlaceholder(placeholder: string): TextInput {
        this.placeholder = placeholder;
        return this;
    }

    setMinLength(min: number): TextInput {
        this.min_length = min;
        return this;
    }

    setMaxLength(max: number): TextInput {
        this.max_length = max;
        return this;
    }

    setRequired(required: boolean): TextInput {
        this.required = required;
        return this;
    }
}