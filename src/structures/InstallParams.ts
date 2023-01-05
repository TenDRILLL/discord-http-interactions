import {APIApplicationInstallParams} from "discord-api-types/v10";
import {Permissions} from "./Permissions";

export class InstallParams {
    public scopes: string[];
    public permissions: Permissions;

    constructor(raw: APIApplicationInstallParams) {
        this.scopes = raw.scopes;
        this.permissions = new Permissions(raw.permissions);
    }
}