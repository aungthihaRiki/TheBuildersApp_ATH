// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
// import { type AppType } from "next/app";
// import { api } from "~/utils/api";
import { Geist } from "next/font/google";

import { AppThemeProvider } from "~/components/ui/providers/theme-provider";
import type { AppProps } from "next/app";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>

      <Component {...pageProps} />

    </AppThemeProvider>
  );
}
