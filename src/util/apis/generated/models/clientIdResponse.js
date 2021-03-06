/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * This response contains the Azure AD B2C client ID for an application.
 *
 */
class ClientIdResponse {
  /**
   * Create a ClientIdResponse.
   * @property {uuid} [clientId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClientIdResponse
   *
   * @returns {object} metadata of ClientIdResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClientIdResponse',
      type: {
        name: 'Composite',
        className: 'ClientIdResponse',
        modelProperties: {
          clientId: {
            required: false,
            serializedName: 'clientId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ClientIdResponse;
