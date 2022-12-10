# discord-http-interactions
A JS library to use Discord without the Bot Gateway using HTTP interactions

Usage:
```ts
const client = new Client({
    token: string,
    publicKey: string,
    port: number,
    endpoint: string,
});

client.on("ready",()=>{
    console.log("READY!");
});

client.on("interaction",(interaction)=>{
    interaction.reply({
        content: "Hi!",
        flags: 64
    });
});

client.login();
```


