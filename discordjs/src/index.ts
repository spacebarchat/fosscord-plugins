// @ts-nocheck
import { Client } from "discord.js";
const client = new Client({
	http: {
		version: 8,
		api: "http://localhost:3001/api",
		cdn: "https://cdn.discordapp.com",
		invite: "https://discord.gg",
		template: "https://discord.new",
	},
});

client.login("");
