import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIMentionableSelectComponent} from "discord-api-types/v10";

export default class MentionableSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIMentionableSelectComponent) {
        super(raw);
    }
}