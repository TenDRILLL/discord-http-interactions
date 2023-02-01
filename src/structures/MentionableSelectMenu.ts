import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIMentionableSelectComponent} from "discord-api-types/v10";
import SelectMenuType from "./SelectMenuType";

export default class MentionableSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIMentionableSelectComponent) {
        super(raw);
        this.type = SelectMenuType.Mentionable;
    }
}