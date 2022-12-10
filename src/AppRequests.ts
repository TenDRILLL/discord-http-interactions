import { verifyKey } from "discord-interactions";
import Client from "./Client";
import { Interaction } from "./structures/Interaction";
import { APIInteraction } from "discord-api-types/v10";

export class AppRequests {
    private client: Client;
    constructor(client){
        this.client = client;
    }

    verifyDiscordRequest(){
        return (req, res, buf) => {
            if (!verifyKey(buf, req.get("X-Signature-Ed25519"), req.get("X-Signature-Timestamp"), this.client.publicKey)) res.status(401).send("Bad request signature");
        };
    }

    listener(){
        this.client.app.post(this.client.endpoint, (req,res)=>{
            const interaction: APIInteraction = req.body;
            if(interaction.type === 1){
                return res.send({type: 1}); //Reply to Discord's Ping.
            } else {
                this.client.emit("interaction",new Interaction(interaction, this.client));
            }
        });
    }
}