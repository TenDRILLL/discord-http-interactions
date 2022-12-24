# discord-http-interactions
[![NPM Version](https://img.shields.io/npm/v/discord-http-interactions?color=37c6ff&style=plastic)](https://www.npmjs.com/package/discord-http-interactions)

A JS library to use Discord without the Bot Gateway using HTTP interactions

Usage:
```ts
const client = new Client({
    token: string,
    publicKey: string,
    port: number,
    endpoint: string, (prefixed with / )
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


