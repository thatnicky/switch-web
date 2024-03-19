import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./helpers";
import axios from "axios";
import { DiscordUser, Guild } from "./types";

const API_URL = 'http://localhost:3001/api';


export const fetchUser = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    console.log(headers)
    const discordUser = null
    if(!headers) return null;
    
    try {
        const {data: discordUser} = await axios.get<DiscordUser[]>(`${API_URL}/user`, {
            headers,
        })
        console.log(discordUser)

        return {props: { discordUser } };
    } catch (err) {
        console.log("err")
        const discordUser = null
        return {props: { discordUser }};
    }
}

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    console.log(headers);
    if (!headers) return { redirect: { destination: '/' } };
    try {
      const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
        headers,
      });
      console.log(guilds);
      return { props: { guilds } };
    } catch (err) {
      console.log(err);
      return { redirect: { destination: '/' } };
    }
  };

  export function parseGuild(guild: Guild[]) {
    const botIn = guild != null

    return {
      icon: guild,
      id: guild,
      name: guild,
      owner: guild,
      permissions: guild,
      botIn: botIn
    }
  }
  

  export const fetchUserAndServers = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    if (!headers) return { redirect: { destination: '/' } };
    try {
      const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
        headers,
      });
      console.log(guilds);
      const { data: botGuilds } = await axios.get<Guild[]>(`${API_URL}/bot`, {
        headers,
      });
      console.log(guilds);

      const {data: discordUser } = await axios.get<DiscordUser[]>(`${API_URL}/user`, {
        headers,
    })
      
      return { props: { guilds, discordUser, botGuilds } };
    } catch (err) {
      console.log(err);
      return { redirect: { destination: '/' } };
    }
  }

  export const fetchValidGuild = (id: string, headers: HeadersInit) => {
    return fetch(`${API_URL}/guilds/${id}/permissions`, {
      headers,
    });
  }

  export const fetchGuild = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    if(!headers) return { redirect: { destination: '/' } };
    try{
      const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${context.query.id}`, {
        headers,
      });
      const {data: discordUser } = await axios.get<DiscordUser[]>(`${API_URL}/user`, {
        headers,
    })
      return { props: { guild, discordUser }}; 
    } catch (err) {
      console.log(err);
      return { redirect: { destination: '/' } };
    }
  }
