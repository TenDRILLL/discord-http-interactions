import {
    APIGuildMember,
    APIInteractionDataResolvedGuildMember,
    PartialAPIMessageInteractionGuildMember
} from "discord-api-types/v10";

export class PartialGuildMember {
    public nick: string | null;
    public avatar: string | null;
    public roles: string[];
    public joinedAt: string;
    public premiumSince: string | null;
    public deaf: boolean | null;
    public mute: boolean | null;
    public pending: boolean | null;
    public communicationDisabledUntil: string | null;

    constructor(raw: APIGuildMember | APIInteractionDataResolvedGuildMember | PartialAPIMessageInteractionGuildMember) {
        this.nick = raw.nick ?? null;
        this.avatar = raw.avatar ?? null;
        this.roles = raw.roles;
        this.joinedAt = raw.joined_at;
        this.premiumSince = raw.premium_since ?? null;
        this.deaf = "deaf" in raw && raw.deaf !== undefined ? raw.deaf : null;
        this.mute = "mute" in raw && raw.mute !== undefined ? raw.mute : null;
        this.pending = raw.pending ?? null;
        this.communicationDisabledUntil = raw.communication_disabled_until ?? null;
    }
}