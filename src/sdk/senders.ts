/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sendersAdd } from "../funcs/sendersAdd.js";
import { sendersDelete } from "../funcs/sendersDelete.js";
import { sendersList } from "../funcs/sendersList.js";
import {
  sendersSetDefault,
  SetDefaultAcceptEnum,
} from "../funcs/sendersSetDefault.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { SetDefaultAcceptEnum } from "../funcs/sendersSetDefault.js";

export class Senders extends ClientSDK {
  /**
   * List allowed senders names
   *
   * @remarks
   * Get a list of allowed senders defined in your account. The request doesn't contain a body or any parameters.
   *
   * As a successful result an array with `Sender` objects will be returned, each object per single sender. Senders are being registered by providers and operators. Registered senders get *Active* status and can be used then to send messages. *Pending* senders are also returned by API (with proper `status`) but until registration they cannot be used. This request have to be authenticated using **API Access Token**.
   *
   * In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.Sender>> {
    return unwrapAsync(sendersList(
      this,
      options,
    ));
  }

  /**
   * Add a new sender name
   *
   * @remarks
   * Define a new allowed sender on your account. The request body should contain a `Sender` object with two properties: `sender` (defines sender name) and `description`. The secont parameter is very important - sender names are being registered by providers and operators. Only fully registered sender names can be used to send messages. Providers need sometimes detailed description of case in which the sender will be used to eliminate frauds. After verifing it they make a decisions if such sender name can be registered. Please carefully fill this property with the extensive description of a sender name (what will be its use, what the name mean, etc).
   *
   * As a successful result a single `Sender` object will be returned. Registered senders get *Active* status and can be used then to send messages. Pending Senders are also returned by API (with proper `status`) but until registration they cannot be used. Response will also include meta-data header: `X-Sandbox` (if a request was made in Sandbox or Production system). This request have to be authenticated using **API Access Token**.
   *
   * In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).
   */
  async add(
    request: components.SenderInput,
    options?: RequestOptions,
  ): Promise<operations.AddSenderResponse> {
    return unwrapAsync(sendersAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a sender name
   *
   * @remarks
   * Removes defined sender name from your account. This endpoint accepts a path `sender` parameter with empty request body. You should pass the full sender name to delete it. Sender name will be deleted immediately.
   *
   * As a successful response only HTTP status code of *204* will be returned in header with empty response body. Response will also include meta-data header: `X-Sandbox` (if a request was made in Sandbox or Production system).
   * This request have to be authenticated using **API Access Token**.
   *
   * In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).
   */
  async delete(
    request: operations.DeleteSenderRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteSenderResponse | undefined> {
    return unwrapAsync(sendersDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Set default sender name
   *
   * @remarks
   * Set default sender name to one of the senders names already defined on your account. Default sender name can be used while sending messages when you not pass any other defined sender to `Sms` object while sending message.
   *
   * This endpoint accepts a path `sender` parameter with empty request body. You should pass the full sender name to set it as default on your account.
   *
   * As a successful response only HTTP status code of *204* will be returned in header with empty response body. Response will also include meta-data header: `X-Sandbox` (if a request was made in Sandbox or Production system).
   * This request have to be authenticated using **API Access Token**.
   *
   * In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).
   */
  async setDefault(
    request: operations.SetDefaultSenderRequest,
    options?: RequestOptions & { acceptHeaderOverride?: SetDefaultAcceptEnum },
  ): Promise<operations.SetDefaultSenderResponse | undefined> {
    return unwrapAsync(sendersSetDefault(
      this,
      request,
      options,
    ));
  }
}
