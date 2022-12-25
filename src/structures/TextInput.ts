import {APITextInputComponent} from "discord-api-types/v10";
import {ModalActionRowComponent} from "./ModalActionRowComponent";

export class TextInput extends ModalActionRowComponent {
    style: number;
    custom_id: string;
    label: string;
    placeholder: string | null;
    value: string | null;
    min_length: number | null;
    max_length: number | null;
    required: boolean | null;

    constructor(raw: APITextInputComponent) {
        super(raw);
        this.style = raw.style;
        this.custom_id = raw.custom_id;
        this.label = raw.label;
        this.placeholder = raw.placeholder ?? null;
        this.value = raw.value ?? null;
        this.min_length = raw.min_length ?? null;
        this.max_length = raw.max_length ?? null;
        this.required = raw.required ?? null;
    }
}