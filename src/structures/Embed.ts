import {
    APIEmbed,
    APIEmbedAuthor,
    APIEmbedField,
    APIEmbedFooter,
    APIEmbedImage,
    APIEmbedProvider,
    APIEmbedThumbnail,
    APIEmbedVideo
} from "discord-api-types/v10";

export class Embed {
    public title: string | null;
    public description: string | null;
    public url: string | null;
    public timestamp: string | null;
    public color: number | null;
    public footer: EmbedFooter | null;
    public image: EmbedImage | null;
    public thumbnail: EmbedThumbnail | null;
    public video: EmbedVideo | null;
    public provider: EmbedProvider | null;
    public author: EmbedAuthor | null;
    public fields: EmbedField[] | null;

    constructor(raw: APIEmbed) {
        this.title = raw.title ?? null;
        this.description = raw.description ?? null;
        this.url = raw.url ?? null;
        this.timestamp = raw.timestamp ?? null;
        this.color = raw.color ?? null;
        this.footer = raw.footer ? new EmbedFooter(raw.footer) : null;
        this.image = raw.image ? new EmbedImage(raw.image) : null;
        this.thumbnail = raw.thumbnail ? new EmbedThumbnail(raw.thumbnail) : null;
        this.video = raw.video ? new EmbedVideo(raw.video) : null;
        this.provider = raw.provider ? new EmbedProvider(raw.provider) : null;
        this.author = raw.author ? new EmbedAuthor(raw.author) : null;
        this.fields = raw.fields ? raw.fields.map(rawField => new EmbedField(rawField)) : null;
    }
}

export class EmbedFooter {
    public text: string;
    public iconUrl: string | null;
    public proxyIconUrl: string | null;

    constructor(raw: APIEmbedFooter) {
        this.text = raw.text;
        this.iconUrl = raw.icon_url ?? null;
        this.proxyIconUrl = raw.proxy_icon_url ?? null;
    }
}

export class EmbedImage {
    public url: string;
    public proxyUrl: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedImage) {
        this.url = raw.url;
        this.proxyUrl = raw.proxy_url ?? null;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
    }
}

export class EmbedThumbnail {
    public url: string;
    public proxyUrl: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedThumbnail) {
        this.url = raw.url;
        this.proxyUrl = raw.proxy_url ?? null;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
    }
}

export class EmbedVideo {
    public url: string | null;
    public proxyUrl: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedVideo) {
        this.url = raw.url ?? null;
        this.proxyUrl = raw.proxy_url ?? null;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
    }
}

export class EmbedProvider {
    public name: string | null;
    public url: string | null;

    constructor(raw: APIEmbedProvider) {
        this.name = raw.name ?? null;
        this.url = raw.url ?? null;
    }
}

export class EmbedAuthor {
    public name: string;
    public url: string | null;
    public iconUrl: string | null;
    public proxyIconUrl: string | null;

    constructor(raw: APIEmbedAuthor) {
        this.name = raw.name;
        this.url = raw.url ?? null;
        this.iconUrl = raw.icon_url ?? null;
        this.proxyIconUrl = raw.proxy_icon_url ?? null;
    }
}

export class EmbedField {
    public name: string;
    public value: string;
    public inline: boolean | null;

    constructor(raw: APIEmbedField) {
        this.name = raw.name;
        this.value = raw.value;
        this.inline = raw.inline ?? null;
    }
}