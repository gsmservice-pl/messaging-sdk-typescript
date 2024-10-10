/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetSubaccountDetailsRequest = {
  /**
   * Login of the subaccount (user) to get the data for
   */
  userLogin: string;
};

/** @internal */
export const GetSubaccountDetailsRequest$inboundSchema: z.ZodType<
  GetSubaccountDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_login: z.string(),
}).transform((v) => {
  return remap$(v, {
    "user_login": "userLogin",
  });
});

/** @internal */
export type GetSubaccountDetailsRequest$Outbound = {
  user_login: string;
};

/** @internal */
export const GetSubaccountDetailsRequest$outboundSchema: z.ZodType<
  GetSubaccountDetailsRequest$Outbound,
  z.ZodTypeDef,
  GetSubaccountDetailsRequest
> = z.object({
  userLogin: z.string(),
}).transform((v) => {
  return remap$(v, {
    userLogin: "user_login",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSubaccountDetailsRequest$ {
  /** @deprecated use `GetSubaccountDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetSubaccountDetailsRequest$inboundSchema;
  /** @deprecated use `GetSubaccountDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetSubaccountDetailsRequest$outboundSchema;
  /** @deprecated use `GetSubaccountDetailsRequest$Outbound` instead. */
  export type Outbound = GetSubaccountDetailsRequest$Outbound;
}
