/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commonPing } from "../funcs/commonPing.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Common extends ClientSDK {
  /**
   * Checks API availability and version
   *
   * @remarks
   * Check the API connection and the current API availability status. Also you will get the current API version number. The request doesn't contain a body or any parameters.
   *
   * As a successful result a `PingResponse` object will be returned. This request doesn't need to be authenticated.
   *
   * In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).
   */
  async ping(
    options?: RequestOptions,
  ): Promise<components.PingResponse> {
    return unwrapAsync(commonPing(
      this,
      options,
    ));
  }
}