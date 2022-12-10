import {APIThreadMember} from "discord-api-types/v10";

export class ThreadMember {
    public id: string | null;
    public userId: string | null;
    public joinTimestamp: string;
    public flags: number;

    constructor(raw: APIThreadMember) {
        this.id = raw.id ?? null;
        this.userId = raw.user_id ?? null;
        this.joinTimestamp = raw.join_timestamp;
        this.flags = raw.flags;
    }
}