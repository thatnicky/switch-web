import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type DiscordUser = {
  discordId: string;
  username: string;
  avatar: string;
  banner: string;
}

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  banner: string;
  botIn: boolean;
};


export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};
