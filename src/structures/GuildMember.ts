import {User} from "./User";
import {APIGuildMember} from "discord-api-types/v10";

export class GuildMember {
    public deaf: boolean;
    public mute: boolean;
    public user: User | null;
    public nick: string | null;
    public avatar: string | null;
    public roles: string[];
    public joinedAt: string;
    public premiumSince: string | null;
    public pending: boolean | null;
    //public permissions: string | null; //Discord API claims to have this, but DAPI doesn't. Therefore not implementing it.
    public communicationDisabledUntil: string | null;

    constructor(raw: APIGuildMember) {
        this.deaf = raw.deaf;
        this.mute = raw.mute;
        this.user = raw.user ? new User(raw.user) : null;
        this.nick = raw.nick ?? null;
        this.avatar = raw.avatar ?? null;
        this.roles = raw.roles;
        this.joinedAt = raw.joined_at ?? null;
        this.premiumSince = raw.premium_since ?? null;
        this.pending = raw.pending ?? null;
        //this.permissions = raw.permissions ?? null;
        this.communicationDisabledUntil = raw.communication_disabled_until ?? null;
    }
}