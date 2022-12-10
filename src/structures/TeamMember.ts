import {User} from "./User";
import {APITeamMember} from "discord-api-types/v10";

export class TeamMember {
    public membershipState: number;
    public permissions: string[];
    public teamId: string;
    public user: User;

    constructor(raw: APITeamMember) {
        this.membershipState = raw.membership_state;
        this.permissions = raw.permissions;
        this.teamId = raw.team_id;
        this.user = new User(raw.user);
    }
}