import {APIApplication} from "discord-api-types/v10";
import {User} from "./User";
import {Team} from "./Team";
import {InstallParams} from "./InstallParams";

export class Application {
    public id: string | null;
    public name: string | null;
    public icon: string | null;
    public description: string | null;
    public rpcOrigins: string[] | null;
    public botPublic: boolean | null;
    public botRequireCodeGrant: boolean | null;
    public termsOfServiceUrl: string | null;
    public privacyPolicyUrl: string | null;
    public owner: User | null;
    public verifyKey: string | null;
    public team: Team | null;
    public guildId: string | null;
    public primarySkuId: string | null;
    public slug: string | null;
    public coverImage: string | null;
    public flags: number | null;
    public tags: [string?, string?, string?, string?, string?] | null;
    public installParams: InstallParams | null;
    public customInstallUrl: string | null;

    constructor(raw: Partial<APIApplication> | APIApplication) {
        this.id = raw.id ?? null;
        this.name = raw.name ?? null;
        this.icon = raw.icon ?? null;
        this.description = raw.description ?? null;
        this.rpcOrigins = raw.rpc_origins ?? null;
        this.botPublic = raw.bot_public ?? null;
        this.botRequireCodeGrant = raw.bot_require_code_grant ?? null;
        this.termsOfServiceUrl = raw.terms_of_service_url ?? null;
        this.privacyPolicyUrl = raw.privacy_policy_url ?? null;
        this.owner = raw.owner ? new User(raw.owner) : null;
        this.verifyKey = raw.verify_key ?? null;
        this.team = raw.team ? new Team(raw.team) : null;
        this.guildId = raw.guild_id ?? null;
        this.primarySkuId = raw.primary_sku_id ?? null;
        this.slug = raw.slug ?? null;
        this.coverImage = raw.cover_image ?? null;
        this.flags = raw.flags ?? null;
        this.tags = raw.tags ?? null;
        this.installParams = raw.install_params ? new InstallParams(raw.install_params) : null;
        this.customInstallUrl = raw.custom_install_url ?? null;
    }
}