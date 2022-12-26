import Embed from "./Embed";
import ActionRow from "./ActionRow";
import {Attachment} from "./Attachment";
import {AllowedMentions} from "./AllowedMentions";

export class AutocompleteReplyData {
    public choices: AutocompleteChoice[];
}

export class AutocompleteChoice {
    public name: string;
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