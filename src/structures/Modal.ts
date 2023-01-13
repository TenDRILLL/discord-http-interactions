import {APIActionRowComponent, APIModalActionRowComponent, APIModalSubmission} from "discord-api-types/v10";
import ActionRow from "./ActionRow";

export default class Modal {
    public title: string | null;
    public custom_id: string | null;
    public components: ActionRow[] | null;

    constructor(raw?: APIModalSubmission){
        this.title = null;
        this.custom_id = raw?.custom_id ?? null;
        this.components = raw?.components.map(rawComponent => new ActionRow(rawComponent as APIActionRowComponent<APIModalActionRowComponent>)) ?? null;
    }

    setTitle(title: string): Modal {
        this.title = title;
        return this;
    }

    setCustomId(id: string): Modal {
        this.custom_id = id;
        return this;
    }

    setComponents(components: ActionRow[]): Modal {
        this.components = components;
        return this;
    }

    addComponents(components: ActionRow[]): Modal {
        let componentArray: ActionRow[] = [];
        if(this.components) componentArray = [...this.components];
        this.components = [...componentArray,...components];
        return this;
    }
}