import {LocalizationDictionary} from "./LocalizationDictionary";
import {APIApplicationCommandAttachmentOption, APIApplicationCommandBooleanOption, APIApplicationCommandChannelOption, APIApplicationCommandIntegerOption, APIApplicationCommandInteractionDataOption, APIApplicationCommandMentionableOption, APIApplicationCommandNumberOption, APIApplicationCommandRoleOption, APIApplicationCommandStringOption, APIApplicationCommandSubcommandGroupOption, APIApplicationCommandSubcommandOption, APIApplicationCommandUserOption} from "discord-api-types/v10";
import {ApplicationCommandInteractionOptionChoice} from "./ApplicationCommandInteractionOptionChoice";

export class ApplicationCommandInteractionDataOption {
    public type: number;
    public name: string;
    public value: string | number | boolean | null;
    public focused: boolean | null;
    public nameLocalizations: LocalizationDictionary | null;
    public description: string | null;
    public descriptionLocalizations: LocalizationDictionary | null;
    public required: boolean;
    public choices: ApplicationCommandInteractionOptionChoice[] | null;
    public options: ApplicationCommandInteractionDataOption[] | null;
    public channelTypes: number[] | null;
    public minValue: number | null;
    public maxValue: number | null;
    public minLength: number | null;
    public maxLength: number | null;
    public autocomplete: boolean;

    constructor(raw: APIApplicationCommandInteractionDataOption | APIApplicationCommandSubcommandOption | APIApplicationCommandSubcommandGroupOption | APIApplicationCommandStringOption | APIApplicationCommandIntegerOption | APIApplicationCommandBooleanOption | APIApplicationCommandUserOption | APIApplicationCommandChannelOption | APIApplicationCommandRoleOption | APIApplicationCommandMentionableOption | APIApplicationCommandNumberOption | APIApplicationCommandAttachmentOption) {
        this.type = raw.type;
        this.name = raw.name;
        this.value = "value" in raw && raw.value !== undefined ? raw.value : null;
        this.focused = "focused" in raw && raw.focused !== undefined ? raw.focused : null;
        this.nameLocalizations = "name_localizations" in raw && raw.name_localizations !== undefined ? raw.name_localizations : null;
        this.description = "description" in raw && raw.description !== undefined ? raw.description : null;
        this.descriptionLocalizations = "description_localizations" in raw && raw.description_localizations !== undefined ? raw.description_localizations : null;
        this.required = "required" in raw && raw.required !== undefined ? raw.required : false;
        this.choices = "choices" in raw && raw.choices !== undefined ? raw.choices.map(rawChoice => new ApplicationCommandInteractionOptionChoice(rawChoice)) : null;
        this.options = "options" in raw && raw.options !== undefined ? raw.options.map(rawOption => new ApplicationCommandInteractionDataOption(rawOption)) : null;
        this.channelTypes = "channel_types" in raw && raw.channel_types !== undefined ? raw.channel_types : null;
        this.minValue = "min_value" in raw && raw.min_value !== undefined ? raw.min_value : null;
        this.maxValue = "max_value" in raw && raw.max_value !== undefined ? raw.max_value : null;
        this.minLength = "min_length" in raw && raw.min_length !== undefined ? raw.min_length : null;
        this.maxLength = "max_length" in raw && raw.max_length !== undefined ? raw.max_length : null;
        this.autocomplete = "autocomplete" in raw && raw.autocomplete !== undefined ? raw.autocomplete : false;
    }
}