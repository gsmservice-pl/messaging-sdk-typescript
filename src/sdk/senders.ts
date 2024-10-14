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
   * Get a list of allowed senders defined in your account. The method doesn't take any parameters.
   *
   * As a successful result an `array` of `Sender` objects will be returned, each object per single sender.
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
   * Define a new allowed sender on your account. You should pass as parameter a `SenderInput` object with two properties: `sender` (defines sender name) and `description`. Please carefully fill this property with the extensive description of a sender name (what will be its use, what the name mean, etc).
   *
   * As a successful result a `AddSenderResponse` object will be returned with a property `result` containing a `Sender` object with details and status of added sender name.
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
   * Removes defined sender name from your account. This method accepts `DeleteSenderRequest` object with `sender` property containing a **sender name** you want to remove. Sender name will be deleted immediately.
   *
   * As a successful response there would be no Exception thrown.
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
   * Set default sender name to one of the senders names already defined on your account. This method accepts a `SetDefaultSenderRequest` object with `sender` property containing a **sender name** to be set as default on your account.
   *
   * As a successful response no Exception will be thrown.
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
