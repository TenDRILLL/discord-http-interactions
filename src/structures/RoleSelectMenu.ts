import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIRoleSelectComponent} from "discord-api-types/v10";

export default class RoleSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIRoleSelectComponent) {
        super(raw);
    }
}