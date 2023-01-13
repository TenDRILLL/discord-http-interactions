import {
    APIActionRowComponent,
    APIMessageActionRowComponent,
    APIModalActionRowComponent,
    ComponentType
} from "discord-api-types/v10";
import Button from "./Button";
import {StringSelectMenu} from "./StringSelectMenu";
import {ChannelSelectMenu} from "./ChannelSelectMenu";
import {MentionableSelectMenu} from "./MentionableSelectMenu";
import {RoleSelectMenu} from "./RoleSelectMenu";
import {UserSelectMenu} from "./UserSelectMenu";
import TextInput from "./TextInput";
import MessageComponentType from "./MessageComponentType";
import {ModalActionRowComponent} from "./ModalActionRowComponent";

export default class ActionRow {
    public type: number;
    public components: (
        Button |
        StringSelectMenu |
        ChannelSelectMenu |
        MentionableSelectMenu |
        RoleSelectMenu |
        UserSelectMenu |
        TextInput |
        ModalActionRowComponent |
        null)[];

    constructor(raw?: APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent>) {
        this.type = MessageComponentType.ActionRow;
        this.components = raw && "components" in raw ? raw.components.map(rawComponent => {
            if(rawComponent.type === ComponentType.Button){
                return new Button(rawComponent);
            } else if(rawComponent.type === ComponentType.StringSelect){
                return new StringSelectMenu(rawComponent);
            } else if(rawComponent.type === ComponentType.ChannelSelect){
                return new ChannelSelectMenu(rawComponent);
            } else if(rawComponent.type === ComponentType.MentionableSelect){
                return new MentionableSelectMenu(rawComponent);
            } else if(rawComponent.type === ComponentType.RoleSelect){
                return new RoleSelectMenu(rawComponent);
            } else if(rawComponent.type === ComponentType.UserSelect) {
                return new UserSelectMenu(rawComponent);
            } else if(rawComponent.type === ComponentType.TextInput) {
                return new TextInput(rawComponent);
            } else {
                return null;
            }
        }) : [];
    }

    setComponents(components: (
        Button |
        StringSelectMenu |
        ChannelSelectMenu |
        MentionableSelectMenu |
        RoleSelectMenu |
        UserSelectMenu |
        TextInput |
        ModalActionRowComponent)[]): ActionRow {
        this.components = components;
        return this;
    }

    addComponents(components: (
        Button |
        StringSelectMenu |
        ChannelSelectMenu |
        MentionableSelectMenu |
        RoleSelectMenu |
        UserSelectMenu |
        TextInput |
        ModalActionRowComponent)[]): ActionRow {
        this.components = [...this.components, ...components];
        return this;
    }
}