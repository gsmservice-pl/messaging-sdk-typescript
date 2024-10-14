/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ErrorResponse,
  ErrorResponse$inboundSchema,
  ErrorResponse$Outbound,
  ErrorResponse$outboundSchema,
} from "./errorresponse.js";

/**
 * An  object containing information about results of cancelling single message
 */
export type CancelledMessage = {
  /**
   * Message ID
   */
  id?: number | undefined;
  /**
   * Status of cancellation (204 if cancelled successfully or error status code)
   */
  status?: number | undefined;
  /**
   * An object that complies with RFC 9457 containing information about a request error
   */
  error?: ErrorResponse | null | undefined;
};

/** @internal */
export const CancelledMessage$inboundSchema: z.ZodType<
  CancelledMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  status: z.number().int().optional(),
  error: z.nullable(ErrorResponse$inboundSchema).optional(),
});

/** @internal */
export type CancelledMessage$Outbound = {
  id?: number | undefined;
  status?: number | undefined;
  error?: ErrorResponse$Outbound | null | undefined;
};

/** @internal */
export const CancelledMessage$outboundSchema: z.ZodType<
  CancelledMessage$Outbound,
  z.ZodTypeDef,
  CancelledMessage
> = z.object({
  id: z.number().int().optional(),
  status: z.number().int().optional(),
  error: z.nullable(ErrorResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelledMessage$ {
  /** @deprecated use `CancelledMessage$inboundSchema` instead. */
  export const inboundSchema = CancelledMessage$inboundSchema;
  /** @deprecated use `CancelledMessage$outboundSchema` instead. */
  export const outboundSchema = CancelledMessage$outboundSchema;
  /** @deprecated use `CancelledMessage$Outbound` instead. */
  export type Outbound = CancelledMessage$Outbound;
}
