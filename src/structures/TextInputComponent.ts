import {APITextInputComponent} from "discord-api-types/v10";
import {ModalActionRowComponent} from "./ModalActionRowComponent";

export class TextInputComponent extends ModalActionRowComponent {
    style: number;
    customId: string;
    label: string;
    placeholder: string | null;
    value: string | null;
    minLength: number | null;
    maxLength: number | null;
    required: boolean | null;

    constructor(raw: APITextInputComponent) {
        super(raw);
        this.style = raw.style;
        this.customId = raw.custom_id;
        this.label = raw.label;
        this.placeholder = raw.placeholder ?? null;
        this.value = raw.value ?? null;
        this.minLength = raw.min_length ?? null;
        this.maxLength = raw.max_length ?? null;
        this.required = raw.required ?? null;
    }
}