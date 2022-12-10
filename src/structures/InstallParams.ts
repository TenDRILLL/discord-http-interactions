import {APIApplicationInstallParams} from "discord-api-types/v10";

export class InstallParams {
    public scopes: string[];
    public permissions: string;

    constructor(raw: APIApplicationInstallParams) {
        this.scopes = raw.scopes;
        this.permissions = raw.permissions;
    }
}