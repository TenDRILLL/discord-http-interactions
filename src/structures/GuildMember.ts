import {User} from "./User";
import {
    APIGuildMember,
    APIInteractionGuildMember,
    PartialAPIMessageInteractionGuildMember
} from "discord-api-types/v10";
import {PartialGuildMember} from "./PartialGuildMember";
import {Permissions} from "./Permissions";

export class GuildMember extends PartialGuildMember {
    public deaf: boolean;
    public mute: boolean;
    public user: User | null;
    public avatar: string | null;
    public roles: string[];
    public joinedAt: string;
    public premiumSince: string | null;
    public pending: boolean | null;
    public permissions: Permissions | null; //Discord API claims to have this, but DAPI doesn't.
    public communicationDisabledUntil: string | null;

    constructor(raw: APIGuildMember | APIInteractionGuildMember | PartialAPIMessageInteractionGuildMember) {
        super(raw);
        this.deaf = raw.deaf;
        this.mute = raw.mute;
        this.user = "user" in raw && raw.user !== undefined ? new User(raw.user) : null;
        this.avatar = raw.avatar ?? (this.user !== null && this.user.avatar !== null) ? this.user!.avatar : null;
        this.roles = raw.roles;
        this.nick = raw.nick ?? null;
        this.joinedAt = raw.joined_at ?? null;
        this.premiumSince = raw.premium_since ?? null;
        this.pending = raw.pending ?? null;
        this.permissions = "permissions" in raw ? new Permissions(raw.permissions) : null;
        this.communicationDisabledUntil = raw.communication_disabled_until ?? null;
    }
}