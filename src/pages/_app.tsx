import NProgress from "nprogress";
import { api } from "../utils/api";
import { NotificationsProvider } from "@mantine/notifications";

import "../styles/globals.css";
import "../styles/nprogress.css";
import { useRouter } from "next/router";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "../components/layout";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();

  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <NotificationsProvider>
      {getLayout(<Component {...pageProps} />)}
    </NotificationsProvider>
  );
};

export default api.withTRPC(MyApp);
