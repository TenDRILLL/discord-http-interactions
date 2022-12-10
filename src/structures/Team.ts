import {APITeam} from "discord-api-types/v10";
import {TeamMember} from "./TeamMember";

export class Team {
    public icon: string | null;
    public id: string;
    public members: TeamMember[];
    public name: string;
    public ownerUserId: string;

    constructor(raw: APITeam) {
        this.icon = raw.icon ?? null;
        this.id = raw.id;
        this.members = raw.members.map(rawMember => new TeamMember(rawMember));
        this.name = raw.name;
        this.ownerUserId = raw.owner_user_id;
    }
}