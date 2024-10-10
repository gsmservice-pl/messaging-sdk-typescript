/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * An object with the properties of the received message
 */
export type IncomingMessage = {
  /**
   * Unique identifier of incoming message
   */
  id?: number | undefined;
  /**
   * Login of the account (sub-account) on which the message was received
   */
  login?: string | undefined;
  /**
   * Recipient number (or service name)
   */
  recipient?: string | undefined;
  /**
   * Message sender number (or alphanumeric name)
   */
  sender?: string | undefined;
  /**
   * Sender name (matched with phonebook)
   */
  phonebookSenderName?: string | null | undefined;
  /**
   * Date and time of message receipt in ISO 8601 format
   */
  date?: Date | undefined;
  /**
   * Received message content
   */
  message?: string | undefined;
  /**
   * Dedicated Mobile Originated service number (if the message was received on this number)
   */
  dedicatedNumber?: string | null | undefined;
  /**
   * Dedicated Mobile Originated service prefix (if the message was received on this number with such prefix)
   */
  dedicatedPrefix?: string | null | undefined;
};

/** @internal */
export const IncomingMessage$inboundSchema: z.ZodType<
  IncomingMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  login: z.string().optional(),
  recipient: z.string().optional(),
  sender: z.string().optional(),
  phonebook_sender_name: z.nullable(z.string()).optional(),
  date: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  message: z.string().optional(),
  dedicated_number: z.nullable(z.string()).optional(),
  dedicated_prefix: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "phonebook_sender_name": "phonebookSenderName",
    "dedicated_number": "dedicatedNumber",
    "dedicated_prefix": "dedicatedPrefix",
  });
});

/** @internal */
export type IncomingMessage$Outbound = {
  id?: number | undefined;
  login?: string | undefined;
  recipient?: string | undefined;
  sender?: string | undefined;
  phonebook_sender_name?: string | null | undefined;
  date?: string | undefined;
  message?: string | undefined;
  dedicated_number?: string | null | undefined;
  dedicated_prefix?: string | null | undefined;
};

/** @internal */
export const IncomingMessage$outboundSchema: z.ZodType<
  IncomingMessage$Outbound,
  z.ZodTypeDef,
  IncomingMessage
> = z.object({
  id: z.number().int().optional(),
  login: z.string().optional(),
  recipient: z.string().optional(),
  sender: z.string().optional(),
  phonebookSenderName: z.nullable(z.string()).optional(),
  date: z.date().transform(v => v.toISOString()).optional(),
  message: z.string().optional(),
  dedicatedNumber: z.nullable(z.string()).optional(),
  dedicatedPrefix: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    phonebookSenderName: "phonebook_sender_name",
    dedicatedNumber: "dedicated_number",
    dedicatedPrefix: "dedicated_prefix",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncomingMessage$ {
  /** @deprecated use `IncomingMessage$inboundSchema` instead. */
  export const inboundSchema = IncomingMessage$inboundSchema;
  /** @deprecated use `IncomingMessage$outboundSchema` instead. */
  export const outboundSchema = IncomingMessage$outboundSchema;
  /** @deprecated use `IncomingMessage$Outbound` instead. */
  export type Outbound = IncomingMessage$Outbound;
}