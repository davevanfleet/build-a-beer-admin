import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";
import { getAuthCookie } from "./authProvider";

const httpClient = (url: unknown, options: fetchUtils.Options | undefined = {}) => {
  const { authToken } = getAuthCookie();
  options.user = {
      authenticated: true,
      token: authToken ? `Bearer ${authToken}` : undefined
  };
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  "https://localhost:7157",
  httpClient
);
