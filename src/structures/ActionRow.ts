import {
    APIActionRowComponent,
    APIMessageActionRowComponent,
    APIModalActionRowComponent,
    ComponentType
} from "discord-api-types/v10";
import {ButtonComponent} from "./ButtonComponent";
import {StringSelectComponent} from "./StringSelectComponent";
import {ChannelSelectComponent} from "./ChannelSelectComponent";
import {MentionableSelectComponent} from "./MentionableSelectComponent";
import {RoleSelectComponent} from "./RoleSelectComponent";
import {UserSelectComponent} from "./UserSelectComponent";
import {TextInputComponent} from "./TextInputComponent";

export class ActionRow {
    public type: number;
    public components: (
        ButtonComponent |
        StringSelectComponent |
        ChannelSelectComponent |
        MentionableSelectComponent |
        RoleSelectComponent |
        UserSelectComponent |
        TextInputComponent |
        null)[];

    constructor(raw: APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent>) {
        this.type = 1;
        this.components = raw.components.map(rawComponent => {
            if(rawComponent.type === ComponentType.Button){
                return new ButtonComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.StringSelect){
                return new StringSelectComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.ChannelSelect){
                return new ChannelSelectComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.MentionableSelect){
                return new MentionableSelectComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.RoleSelect){
                return new RoleSelectComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.UserSelect) {
                return new UserSelectComponent(rawComponent);
            } else if(rawComponent.type === ComponentType.TextInput) {
                return new TextInputComponent(rawComponent);
            } else {
                return null;
            }
        });
    }
}