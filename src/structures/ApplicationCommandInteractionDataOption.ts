import {APIApplicationCommandAttachmentOption, APIApplicationCommandBooleanOption, APIApplicationCommandChannelOption, APIApplicationCommandIntegerOption, APIApplicationCommandInteractionDataOption, APIApplicationCommandMentionableOption, APIApplicationCommandNumberOption, APIApplicationCommandRoleOption, APIApplicationCommandStringOption, APIApplicationCommandSubcommandGroupOption, APIApplicationCommandSubcommandOption, APIApplicationCommandUserOption} from "discord-api-types/v10";

export class ApplicationCommandInteractionDataOption {
    public name: string;
    public type: number;
    public value: string | number | boolean | null;
    public options: ApplicationCommandInteractionDataOption[] | null;

    constructor(raw: APIApplicationCommandInteractionDataOption | APIApplicationCommandSubcommandOption | APIApplicationCommandSubcommandGroupOption | APIApplicationCommandStringOption | APIApplicationCommandIntegerOption | APIApplicationCommandBooleanOption | APIApplicationCommandUserOption | APIApplicationCommandChannelOption | APIApplicationCommandRoleOption | APIApplicationCommandMentionableOption | APIApplicationCommandNumberOption | APIApplicationCommandAttachmentOption) {
        this.type = raw.type;
        this.name = raw.name;
        this.value = "value" in raw && raw.value !== undefined ? raw.value : null;
        this.options = "options" in raw && raw.options !== undefined ? raw.options.map(rawOption => new ApplicationCommandInteractionDataOption(rawOption)) : null;
    }
}