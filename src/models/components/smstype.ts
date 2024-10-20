/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * SMS type (SmsType.SmsPro -> SMS PRO, SmsType.SmsEco -> SMS ECO, SmsType.SmsTwoWay -> SMS 2WAY)
 */
export const SmsType = {
  SmsPro: 1,
  SmsEco: 3,
  SmsTwoWay: 4,
} as const;
/**
 * SMS type (SmsType.SmsPro -> SMS PRO, SmsType.SmsEco -> SMS ECO, SmsType.SmsTwoWay -> SMS 2WAY)
 */
export type SmsType = OpenEnum<typeof SmsType>;

/** @internal */
export const SmsType$inboundSchema: z.ZodType<SmsType, z.ZodTypeDef, unknown> =
  z
    .union([
      z.nativeEnum(SmsType),
      z.number().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const SmsType$outboundSchema: z.ZodType<SmsType, z.ZodTypeDef, SmsType> =
  z.union([
    z.nativeEnum(SmsType),
    z.number().and(z.custom<Unrecognized<number>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsType$ {
  /** @deprecated use `SmsType$inboundSchema` instead. */
  export const inboundSchema = SmsType$inboundSchema;
  /** @deprecated use `SmsType$outboundSchema` instead. */
  export const outboundSchema = SmsType$outboundSchema;
}
