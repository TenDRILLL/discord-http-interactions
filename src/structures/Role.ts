import {APIRole} from "discord-api-types/v10";
import {RoleTags} from "./RoleTags";

export class Role {
    public id: string;
    public name: string;
    public color: number;
    public hoist: boolean;
    public icon: string | null;
    public unicode_emoji: string | null;
    public position: number;
    public permissions: string;
    public managed: boolean;
    public mentionable: boolean;
    public tags: RoleTags | null;

    constructor(raw: APIRole) {
        this.id = raw.id;
        this.name = raw.name;
        this.color = raw.color;
        this.hoist = raw.hoist;
        this.icon = raw.icon ?? null;
        this.unicode_emoji = raw.unicode_emoji ?? null;
        this.position = raw.position;
        this.permissions = raw.permissions;
        this.managed = raw.managed;
        this.mentionable = raw.mentionable
        this.tags = raw.tags ? new RoleTags(raw.tags) : null;
    }
}