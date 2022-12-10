import {GuildChannel} from "./GuildChannel";
import {APIThreadChannel} from "discord-api-types/v10";
import {ThreadMember} from "./ThreadMember";
import {ThreadMetadata} from "./ThreadMetadata";

export class ThreadChannel extends GuildChannel {
    public member: ThreadMember | null;
    public threadMetadata: ThreadMetadata | null;
    public messageCount: number | null;
    public memberCount: number | null;
    public rateLimitPerUser: number | null;
    public ownerId: string | null;
    public lastMessageId: string | null;
    public totalMessageSent: number | null;
    public appliedTags: string[];

    constructor(raw: APIThreadChannel) {
        super(raw);
        this.member = raw.member ? new ThreadMember(raw.member) : null;
        this.threadMetadata = raw.thread_metadata ? new ThreadMetadata(raw.thread_metadata) : null;
        this.messageCount = raw.message_count ?? null;
        this.memberCount = raw.message_count ?? null;
        this.rateLimitPerUser = raw.rate_limit_per_user ?? null;
        this.ownerId = raw.owner_id ?? null;
        this.lastMessageId = raw.last_message_id ?? null;
        this.totalMessageSent = raw.total_message_sent ?? null;
        this.appliedTags = raw.applied_tags;
    }
}