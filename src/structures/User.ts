import {APIUser} from "discord-api-types/v10";

export class User {
    public id: string;
    public username: string;
    public discriminator: string;
    public globalName: string | null;
    public avatar: string | null;
    public bot: boolean | null;
    public system: boolean | null;
    public mfaEnabled: boolean | null;
    public banner: string | null;
    public accentColor: number | null;
    public locale: string | null;
    public verified: boolean | null;
    public email: string | null;
    public flags: number | null;
    public premiumType: number | null;
    public publicFlags: number | null;

    constructor(raw: APIUser & {global_name?: string}) {
        this.id = raw.id;
        this.username = raw.username;
        this.discriminator = raw.discriminator;
        this.globalName = raw.global_name ?? null;
        this.avatar = raw.avatar ?? `${this.globalName !== null ? (+this.id >> 22) % 6 : +this.discriminator % 5}`;
        this.bot = raw.bot ?? null;
        this.system = raw.system ?? null;
        this.mfaEnabled = raw.mfa_enabled ?? null;
        this.banner = raw.banner ?? null;
        this.accentColor = raw.accent_color ?? null;
        this.locale = raw.locale ?? null;
        this.verified = raw.verified ?? null;
        this.email = raw.email ?? null;
        this.flags = raw.flags ?? null;
        this.premiumType = raw.premium_type ?? null;
        this.publicFlags = raw.public_flags ?? null;
    }
}