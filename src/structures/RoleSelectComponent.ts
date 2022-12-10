import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIRoleSelectComponent} from "discord-api-types/v10";

export class RoleSelectComponent extends SelectMenuComponent {
    constructor(raw: APIRoleSelectComponent) {
        super(raw);
    }
}