export class WebhookUser {
    public id: string;
    public username: string;
    public avatar: string | null;

    constructor(raw) {
        this.id = raw.id;
        this.username = raw.username;
        this.avatar = raw.avatar ?? null;
    }

}