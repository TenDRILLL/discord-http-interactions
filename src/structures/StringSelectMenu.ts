import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIStringSelectComponent} from "discord-api-types/v10";
import {SelectMenuOption} from "./SelectMenuOption";

export class StringSelectMenu extends SelectMenuComponent {
    public options: SelectMenuOption[];

    constructor(raw: APIStringSelectComponent) {
        super(raw);
        this.options = raw.options.map(rawSelectMenuOption => new SelectMenuOption(rawSelectMenuOption));
    }
}