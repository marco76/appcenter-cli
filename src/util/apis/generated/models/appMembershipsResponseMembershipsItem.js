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
 * Class representing a AppMembershipsResponseMembershipsItem.
 */
class AppMembershipsResponseMembershipsItem {
  /**
   * Create a AppMembershipsResponseMembershipsItem.
   * @property {string} [appId]
   * @property {string} [userId]
   * @property {array} [permissions]
   * @property {string} [origin] Possible values include: 'appcenter',
   * 'hockeyapp', 'codepush', 'testcloud', 'hockeyapp-dogfood'
   * @property {string} [sourceType] Possible values include: 'user', 'org',
   * 'distribution_group', 'team', 'release'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppMembershipsResponseMembershipsItem
   *
   * @returns {object} metadata of AppMembershipsResponseMembershipsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppMembershipsResponse_membershipsItem',
      type: {
        name: 'Composite',
        className: 'AppMembershipsResponseMembershipsItem',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          sourceType: {
            required: false,
            serializedName: 'source_type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppMembershipsResponseMembershipsItem;
