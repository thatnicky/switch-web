import { GetServerSidePropsContext } from "next";
import { DiscordUser, Guild } from "./types";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies['connect.sid'];
    console.log("sessionID")
    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
     } : false;
}

export const getAvatar = (user?: DiscordUser) =>
!user || !user.avatar
? '/me.png'
: `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`

export const getIcon = (guild?: Guild) =>
!guild || !guild.icon
? '/me.png'
: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`

export const getBanner = (user?: DiscordUser) =>
!user || !user.banner
? '/me.png'
: `https://cdn.discordapp.com/banners/${user.discordId}/${user.banner}.png?size=512`

export const getServerBanner = (guild?: Guild) =>
!guild || !guild.banner
? '/switch.png'
: `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=512`
