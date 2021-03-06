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

const models = require('./index');

/**
 * VSTS bugtracker specific settings
 *
 * @extends models['AlertingBugtrackerSettings']
 */
class AlertingVstsBugtrackerSettings extends models['AlertingBugtrackerSettings'] {
  /**
   * Create a AlertingVstsBugtrackerSettings.
   * @property {string} vstsProjectId
   * @property {string} vstsProjectUri
   * @property {string} [vstsProjectName]
   * @property {string} [vstsAccountName]
   * @property {string} [vstsAreaPath]
   * @property {object} [vstsDefaultPayload]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AlertingVstsBugtrackerSettings
   *
   * @returns {object} metadata of AlertingVstsBugtrackerSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'vsts',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'AlertingBugtrackerSettings',
        className: 'AlertingVstsBugtrackerSettings',
        modelProperties: {
          callbackUrl: {
            required: false,
            serializedName: 'callback_url',
            type: {
              name: 'String'
            }
          },
          ownerName: {
            required: true,
            serializedName: 'owner_name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          vstsProjectId: {
            required: true,
            serializedName: 'vsts_project_id',
            type: {
              name: 'String'
            }
          },
          vstsProjectUri: {
            required: true,
            serializedName: 'vsts_project_uri',
            type: {
              name: 'String'
            }
          },
          vstsProjectName: {
            required: false,
            serializedName: 'vsts_project_name',
            type: {
              name: 'String'
            }
          },
          vstsAccountName: {
            required: false,
            serializedName: 'vsts_account_name',
            type: {
              name: 'String'
            }
          },
          vstsAreaPath: {
            required: false,
            serializedName: 'vsts_area_path',
            type: {
              name: 'String'
            }
          },
          vstsDefaultPayload: {
            required: false,
            serializedName: 'vsts_default_payload',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertingVstsBugtrackerSettings;
