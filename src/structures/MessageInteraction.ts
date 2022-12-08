import {User} from "./User";
import {GuildMember} from "./GuildMember";
import {APIMessageInteraction} from "discord-api-types/v10";

export class MessageInteraction {
    public id: string;
    public type: number;
    public name: string;
    public user: User;
    public member: GuildMember | null;

    constructor(raw: APIMessageInteraction) {
        this.id = raw.id;
        this.type = raw.type;
        this.name = raw.name;
        this.user = new User(raw.user);
        this.member = raw.member ? new GuildMember(raw.member) : null;
    }
}