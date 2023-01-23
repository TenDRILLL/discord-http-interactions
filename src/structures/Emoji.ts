import {User} from "./User";

export default class Emoji {
    public name: string;
    public roles: string[];
    public id: string;
    public require_colons: boolean;
    public managed: boolean;
    public animated: boolean;
    public available: boolean;
    public user?: User;

    constructor(raw) {
        this.name = raw.name;
        this.roles = raw.roles;
        this.id = raw.id;
        this.require_colons = raw.require_colons;
        this.managed = raw.managed;
        this.animated = raw.animated;
        this.available = raw.available
        if("user" in raw){
            this.user = new User(raw.user);
        }
    }

    public toString(){
        return `<${this.animated ? "a:" : ":"}${this.name}:${this.id}>`;
    }

}