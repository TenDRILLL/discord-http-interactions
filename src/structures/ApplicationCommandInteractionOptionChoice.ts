import {LocalizationDictionary} from "./LocalizationDictionary";
import {APIApplicationCommandOptionChoice} from "discord-api-types/v10";

export class ApplicationCommandInteractionOptionChoice {
    public name: string;
    public nameLocalization: LocalizationDictionary | null;
    public value: string | number;

    constructor(raw: APIApplicationCommandOptionChoice) {
        this.name = raw.name;
        this.nameLocalization = raw.name_localizations ?? null;
        this.value = raw.value;
    }
}