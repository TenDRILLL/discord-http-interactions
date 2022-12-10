import {APIThreadMetadata} from "discord-api-types/v10";

export class ThreadMetadata {
    public archived: boolean;
    public autoArchiveDuration: number;
    public archiveTimestamp: string;
    public locked: boolean | null;
    public invitable: boolean | null;
    public createTimestamp: string | null;

    constructor(raw: APIThreadMetadata) {
        this.archived = raw.archived;
        this.autoArchiveDuration = raw.auto_archive_duration;
        this.archiveTimestamp = raw.archive_timestamp;
        this.locked = raw.locked ?? null;
        this.invitable = raw.invitable ?? null;
        this.createTimestamp = raw.create_timestamp ?? null;
    }
}