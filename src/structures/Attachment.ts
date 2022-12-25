import {APIAttachment} from "discord-api-types/v10";

export class Attachment {
    public id: string;
    public filename: string;
    public description: string | null;
    public content_type: string | null;
    public size: number;
    public url: string;
    public proxy_url: string;
    public height: number | null;
    public width: number | null;
    public ephemeral: boolean | null;

    constructor(raw: APIAttachment) {
        this.id = raw.id;
        this.filename = raw.filename;
        this.description = raw.description ?? null;
        this.content_type = raw.content_type ?? null;
        this.size = raw.size;
        this.url = raw.url;
        this.proxy_url = raw.proxy_url;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
        this.ephemeral = raw.ephemeral ?? null;
    }
}