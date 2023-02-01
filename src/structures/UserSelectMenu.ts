import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIUserSelectComponent} from "discord-api-types/v10";
import SelectMenuType from "./SelectMenuType";

export default class UserSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIUserSelectComponent) {
        super(raw);
        this.type = SelectMenuType.User;
    }
}