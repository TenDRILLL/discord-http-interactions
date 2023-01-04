import {LocalizationDictionary} from "./LocalizationDictionary";
import {AutocompleteChoice} from "./InteractionReplyDataType";

export default class ApplicationCommandObject {
    type?: number;
    name: string;
    name_localizations?: LocalizationDictionary;
    description: string;
    description_localizations?: LocalizationDictionary;
    required?: boolean;
    choices?: AutocompleteChoice;
    options?: ApplicationCommandObject[];
    channel_types?: number[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}