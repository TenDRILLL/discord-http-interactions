import { verifyKey } from "discord-interactions";
import { Client } from "./Client";
import { Interaction } from "./Interaction";

export class AppRequests {
    private client: Client;
    constructor(client){
        this.client = client;
    }

    verifyDiscordRequest(){
        return function (req, res, buf, encoding) {
            const signature = req.get("X-Signature-Ed25519");
            const timestamp = req.get("X-Signature-Timestamp");
            const isValidRequest = verifyKey(buf, signature, timestamp, this.client.publicKey);
            if (!isValidRequest) {
                res.status(401).send("Bad request signature");
            }
        };
    }

    listener(){
        this.client.app.post(this.client.endpoint, (req,res)=>{
            const interaction = req.body;
            if(interaction.type === 1){
                return res.send({type: 1});
            } else {
                this.client.emit("interaction",new Interaction(interaction));
            }
        });
    }
}