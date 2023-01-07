import {verifyKeyMiddleware} from "discord-interactions";
import Client from "./Client";
import {APIApplicationCommandInteraction, APIInteraction, APIMessageComponentInteraction, APIApplicationCommandAutocompleteInteraction, APIModalSubmitInteraction} from "discord-api-types/v10";
import InteractionType from "./structures/InteractionType";
import {ApplicationCommandInteraction} from "./structures/ApplicationCommandInteraction";
import {MessageComponentInteraction} from "./structures/MessageComponentInteraction";
import {ApplicationCommandAutocompleteInteraction} from "./structures/ApplicationCommandAutocompleteInteraction";
import {ModalSubmitInteraction} from "./structures/ModalSubmitInteraction";

export class AppRequests {
    private readonly client: Client;
    constructor(client){
        this.client = client;
    }

    listener(){
        this.client.app.post(this.client.endpoint, verifyKeyMiddleware(this.client.publicKey), (req,res)=>{
            if(res.finished) return;
            res.status(200);
            const interaction: APIInteraction = req.body;
            switch(interaction.type){
                case InteractionType.Ping:
                    res.send({type: InteractionType.Ping}); //Reply to Discord's Ping.
                    break;
                case InteractionType.ApplicationCommand:
                    this.client.emit("interaction", new ApplicationCommandInteraction(interaction as APIApplicationCommandInteraction, this.client));
                    break;
                case InteractionType.MessageComponent:
                    this.client.emit("interaction", new MessageComponentInteraction(interaction as APIMessageComponentInteraction, this.client));
                    break;
                case InteractionType.ApplicationCommandAutocomplete:
                    this.client.emit("interaction", new ApplicationCommandAutocompleteInteraction(interaction as APIApplicationCommandAutocompleteInteraction, this.client));
                    break;
                case InteractionType.ModalSubmit:
                    this.client.emit("interaction", new ModalSubmitInteraction(interaction as APIModalSubmitInteraction, this.client));
                    break;
                default:
                    return console.warn(`[WARN] Interaction with type: ${interaction.type} (${InteractionType[interaction.type] ?? "UNKNOWN"}) is not yet implemented with this library.`);
            }
        });
        if(this.client.linkedRolesEndpoint){
            console.warn("[WARN] Linked Roles endpoint is experimental, no typings provided yet.");
            this.client.app.post(this.client.linkedRolesEndpoint, verifyKeyMiddleware(this.client.publicKey), (req,res)=>{
                if(res.finished) return;
                res.status(200);
                return this.client.emit("linkedRoles", req.body);
            });
        }
        if(this.client.additionalEndpoints){
            const reservedEndpoints = ["interaction", "linkedRoles", "error", "ready"];
            this.client.additionalEndpoints.forEach(endpoint => {
                if(reservedEndpoints.includes(endpoint.name)) return console.warn(`[WARN] ${endpoint.method} ${endpoint.endpoint} not loaded as "${endpoint.name}" is a reserved event name, please choose another one.`);
                switch(endpoint.method){
                    case "COPY":
                        this.client.app.copy(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "DELETE":
                        this.client.app.delete(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "GET":
                        this.client.app.get(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "HEAD":
                        this.client.app.head(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "OPTIONS":
                        this.client.app.options(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "POST":
                        this.client.app.post(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "PUT":
                        this.client.app.put(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "REPORT":
                        this.client.app.report(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "SEARCH":
                        this.client.app.search(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "SUBSCRIBE":
                        this.client.app.subscribe(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "TRACE":
                        this.client.app.trace(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    case "UNSUBSCRIBE":
                        this.client.app.unsubscribe(endpoint.endpoint, (req,res)=>{if(res.finished){return;} return this.client.emit(endpoint.name, req, res)});
                        break;
                    default:
                        return console.warn(`[WARN] ${endpoint.method} ${endpoint.endpoint} not loaded as ${endpoint.method} is not a valid method.
Valid methods: COPY, DELETE, GET, HEAD, OPTIONS, POST, PUT, REPORT, SEARCH, SUBSCRIBE, TRACE, UNSUBSCRIBE`);
                }
                console.log(`${endpoint.method} ${endpoint.endpoint} -> Event: "${endpoint.name}"`);
            });
        }
    }
}