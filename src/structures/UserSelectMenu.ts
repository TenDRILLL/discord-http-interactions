import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIUserSelectComponent} from "discord-api-types/v10";

export default class UserSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIUserSelectComponent) {
        super(raw);
    }
}