import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ConfigProvider, Layout } from "antd";
import { store } from "data/store";
import { Provider } from "react-redux";
import ruRU from "antd/locale/ru_RU";
import commonCSS from "styles/common.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Employees",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: commonCSS },
  ]
}

export default function App() {
  return (
    <Provider store={store}>
      <html lang="ru">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <ConfigProvider
            locale={ruRU}
            theme={{
              token: {
                colorInfo: '#dc6b29',
                colorPrimary: '#dc6b29',
              }
            }}
          >
            <Layout className="employees-layout">
              <Outlet />
            </Layout>
          </ConfigProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </Provider>
  );
}
