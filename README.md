# discord-http-interactions
[![NPM Version](https://img.shields.io/npm/v/discord-http-interactions?color=37c6ff&style=plastic)](https://www.npmjs.com/package/discord-http-interactions)

A JS library to use Discord without the Bot Gateway using HTTP interactions

Usage:
```ts
const {Client} = require("discord-http-interactions");

const client = new Client({
    token: "NDg0NDE5MTI0NDMzNTE4NjAy.eyJtZXNzYWdlIjoiWW91IHRob3VnaHQgSSdkIGxlYXZlIGFuIGFjdHVhbCB0b2tlbiBoZXJlPyBTaGFtZSBvbiB5b3UuIn0=.c29tZXJhbmRvbXNoaXRoZXJl",
    publicKey: "a12b3cd45678901234e5678fg901h2i34j567k89l012mn345o6p78901q23rst4",
    port: 13337,
    endpoint: "/api/interactions"
});

client.on("ready",()=>{
    console.log("READY!");
});

client.on("interaction",(interaction)=>{
    interaction.reply({
        content: "Hi!",
        ephemeral: true
    });
});

client.login();
```


