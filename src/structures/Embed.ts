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

export default class Embed {
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

    constructor(raw?: APIEmbed) {
        this.title = raw?.title ?? null;
        this.description = raw?.description ?? null;
        this.url = raw?.url ?? null;
        this.timestamp = raw?.timestamp ?? null;
        this.color = raw?.color ?? null;
        this.footer = raw?.footer ? new EmbedFooter(raw.footer) : null;
        this.image = raw?.image ? new EmbedImage(raw.image) : null;
        this.thumbnail = raw?.thumbnail ? new EmbedThumbnail(raw.thumbnail) : null;
        this.video = raw?.video ? new EmbedVideo(raw.video) : null;
        this.provider = raw?.provider ? new EmbedProvider(raw.provider) : null;
        this.author = raw?.author ? new EmbedAuthor(raw.author) : null;
        this.fields = raw?.fields ? raw.fields.map(rawField => new EmbedField(rawField)) : null;
    }

    setTitle(title: string): Embed {
        this.title = title;
        return this;
    }

    setDescription(desc: string): Embed {
        this.description = desc;
        return this;
    }

    setUrl(url: string): Embed {
        this.url = url;
        return this;
    }

    setTimestamp(timestamp: string): Embed {
        this.timestamp = timestamp;
        return this;
    }

    setColor(color: number): Embed {
        this.color = color;
        return this;
    }

    setFooter(text: string, iconUrl?: string){
        let raw = {text};
        if(iconUrl) raw["icon_url"] = iconUrl;
        this.footer = new EmbedFooter(raw);
        return this;
    }

    setImage(url: string): Embed {
        this.image = new EmbedImage({url});
        return this;
    }

    setThumbnail(url: string): Embed {
        this.thumbnail = new EmbedThumbnail({url});
        return this;
    }

    setAuthor(name: string, url?: string, iconUrl?: string): Embed {
        let raw = {name};
        if(url) raw["url"] = url;
        if(iconUrl) raw["icon_url"] = iconUrl;
        this.author = new EmbedAuthor(raw);
        return this;
    }

    setFields(fields: RawEmbedField[]): Embed {
        this.fields = fields.map(x => new EmbedField(x));
        return this;
    }

    addFields(fields: RawEmbedField[]): Embed {
        let fieldArray: EmbedField[] = [];
        if(this.fields) fieldArray = [...this.fields];
        this.fields = [...fieldArray,...fields.map(x => new EmbedField(x))];
        return this;
    }
}

export class RawEmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

export class EmbedFooter {
    public text: string;
    public icon_url: string | null;
    public proxy_icon_url: string | null;

    constructor(raw: APIEmbedFooter) {
        this.text = raw.text;
        this.icon_url = raw.icon_url ?? null;
        this.proxy_icon_url = raw.proxy_icon_url ?? null;
    }
}

export class EmbedImage {
    public url: string;
    public proxy_url: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedImage) {
        this.url = raw.url;
        this.proxy_url = raw.proxy_url ?? null;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
    }
}

export class EmbedThumbnail {
    public url: string;
    public proxy_url: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedThumbnail) {
        this.url = raw.url;
        this.proxy_url = raw.proxy_url ?? null;
        this.height = raw.height ?? null;
        this.width = raw.width ?? null;
    }
}

export class EmbedVideo {
    public url: string | null;
    public proxy_url: string | null;
    public height: number | null;
    public width: number | null;

    constructor(raw: APIEmbedVideo) {
        this.url = raw.url ?? null;
        this.proxy_url = raw.proxy_url ?? null;
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
    public icon_url: string | null;
    public proxy_icon_url: string | null;

    constructor(raw: APIEmbedAuthor) {
        this.name = raw.name;
        this.url = raw.url ?? null;
        this.icon_url = raw.icon_url ?? null;
        this.proxy_icon_url = raw.proxy_icon_url ?? null;
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