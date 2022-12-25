import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIUserSelectComponent} from "discord-api-types/v10";

export class UserSelectMenu extends SelectMenuComponent {
    constructor(raw: APIUserSelectComponent) {
        super(raw);
    }
}