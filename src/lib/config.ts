/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Production system
 */
export const ServerProd = "prod";
/**
 * Test system (SANDBOX)
 */
export const ServerSandbox = "sandbox";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://api.gsmservice.pl/rest",
  [ServerSandbox]: "https://api.gsmservice.pl/rest-sandbox",
} as const;

export type SDKOptions = {
  bearer?: string | (() => Promise<string>);

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProd;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "0.9.1",
  sdkVersion: "0.1.65",
  genVersion: "2.438.1",
  userAgent:
    "speakeasy-sdk/typescript 0.1.65 2.438.1 0.9.1 @gsmservice-pl/messaging-sdk-typescript",
} as const;