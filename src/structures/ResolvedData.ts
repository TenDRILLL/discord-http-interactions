import {APIInteractionDataResolved, APIInteractionDataResolvedGuildMember, APIMessageApplicationCommandInteractionDataResolved, APIUser, APIUserInteractionDataResolved} from "discord-api-types/v10";
import {User} from "./User";
import {Role} from "./Role";
import {PartialChannel} from "./PartialChannel";
import {Attachment} from "./Attachment";
import {PartialGuildMember} from "./PartialGuildMember";
import {Channel} from "./Channel";
import {Message} from "./Message";

export class ResolvedData {
    public users: Map<string, User>;
    public members: Map<string, PartialGuildMember>;
    public roles: Map<string, Role>;
    public channels: Map<string, PartialChannel>;
    public messages: Map<string, Message>;
    public attachments: Map<string, Attachment>;

    constructor(raw: APIUserInteractionDataResolved | APIMessageApplicationCommandInteractionDataResolved | APIInteractionDataResolved) {
        this.users = "users" in raw && raw.users !== undefined ?
            new Map(Object.entries(raw.users)
                .map(item => [item[0], new User(item[1] as APIUser)]))
            : new Map();
        this.members = "members" in raw && raw.members !== undefined ?
            new Map(Object.entries(raw.members)
                .map(item => [item[0], new PartialGuildMember(item[1] as APIInteractionDataResolvedGuildMember)]))
            : new Map();
        this.roles = "roles" in raw && raw.roles !== undefined ?
            new Map(Object.entries(raw.roles)
                .map(item => [item[0], new Role(item[1])]))
            : new Map();
        this.channels = "channels" in raw && raw.channels !== undefined ?
            new Map(Object.entries(raw.channels)
                .map(item => [item[0], new Channel(item[1])]))
            : new Map();
        this.messages = "messages" in raw && raw.messages !== undefined ?
            new Map(Object.entries(raw.messages)
                .map(item => [item[0], new Message(item[1])]))
            : new Map();
        this.attachments = "attachments" in raw && raw.attachments !== undefined ?
            new Map(Object.entries(raw.attachments)
                .map(item => [item[0], new Attachment(item[1])]))
            : new Map();
    }
}