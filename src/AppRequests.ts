import { verifyKey } from "discord-interactions";
import Client from "./Client";
import {APIApplicationCommandInteraction, APIInteraction, APIMessageComponentInteraction, APIApplicationCommandAutocompleteInteraction, APIModalSubmitInteraction} from "discord-api-types/v10";
import InteractionType from "./structures/InteractionType";
import {ApplicationCommandInteraction} from "./structures/ApplicationCommandInteraction";
import {Interaction} from "./structures/Interaction";

export class AppRequests {
    private client: Client;
    constructor(client){
        this.client = client;
    }

    verifyDiscordRequest(){
        return (req, res, buf) => {
            if (!verifyKey(buf, req.get("X-Signature-Ed25519"), req.get("X-Signature-Timestamp"), this.client.publicKey)) return res.sendStatus(401).end();
        };
    }

    listener(){
        this.client.app.post(this.client.endpoint, (req,res)=>{
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
                    //this.client.emit("interaction", new MessageComponentInteraction(interaction as APIMessageComponentInteraction, this.client));
                    //break;
                case InteractionType.ApplicationCommandAutocomplete:
                    //this.client.emit("interaction", new ApplicationCommandAutocompleteInteraction(interaction as APIApplicationCommandAutocompleteInteraction, this.client));
                    //break;
                case InteractionType.ModalSubmit:
                    //this.client.emit("interaction", new ModalSubmitInteraction(interaction as APIModalSubmitInteraction, this.client));
                    //break;
                default: //@ts-ignore
                    return this.client.emit("interaction", new Interaction(interaction, this.client));
                    //return console.warn(`Interaction with type: ${interaction.type} is not yet implemented with this library.`);
            }
        });
    }
}