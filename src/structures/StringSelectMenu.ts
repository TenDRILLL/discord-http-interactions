import {SelectMenuComponent} from "./SelectMenuComponent";
import {APIStringSelectComponent} from "discord-api-types/v10";
import {SelectMenuOption} from "./SelectMenuOption";

export class StringSelectMenu extends SelectMenuComponent {
    public options: SelectMenuOption[];

    constructor(raw?: APIStringSelectComponent) {
        super(raw);
        this.options = raw?.options.map(rawSelectMenuOption => new SelectMenuOption(rawSelectMenuOption)) ?? [];
    }

    setOptions(options: SelectMenuOption[]): StringSelectMenu{
        this.options = options;
        return this;
    }

    addOptions(options: SelectMenuOption[]): StringSelectMenu {
        let optionArray: SelectMenuOption[] = [];
        if(this.options) optionArray = [...this.options];
        this.options = [...optionArray,...options.map(x => new SelectMenuOption(x))];
        return this;
    }
}