import Embed from "./Embed";
import ActionRow from "./ActionRow";
import {Attachment} from "./Attachment";
import {AllowedMentions} from "./AllowedMentions";
import {LocalizationDictionary} from "./LocalizationDictionary";

export class AutocompleteReplyData {
    public choices: AutocompleteChoice[];
}

export class AutocompleteChoice {
    public name: string;
    public name_localizations?: LocalizationDictionary;
    public value: string;
}

export class InteractionReplyData {
    public tts?: boolean;
    public content?: string;
    public embeds?: Embed[];
    public allowed_mentions?: AllowedMentions;
    public ephemeral?: boolean;
    public suppressEmbeds?: boolean;
    public components?: ActionRow[];
    public attachments?: Attachment[];
}

export class InteractionDeferData {
    ephemeral?: boolean;
}