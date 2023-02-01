import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIRoleSelectComponent} from "discord-api-types/v10";
import SelectMenuType from "./SelectMenuType";

export default class RoleSelectMenu extends SelectMenuComponent {
    constructor(raw?: APIRoleSelectComponent) {
        super(raw);
        this.type = SelectMenuType.Role;
    }
}