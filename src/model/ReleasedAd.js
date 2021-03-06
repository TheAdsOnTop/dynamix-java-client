/**
 * Dynamix
 * Sign up for Dynamix & grab your token.
 *
 * OpenAPI spec version: v0.1.0
 * Contact: david@theadsontop.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ad'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ad'));
  } else {
    // Browser globals (root is window)
    if (!root.Dynamix) {
      root.Dynamix = {};
    }
    root.Dynamix.ReleasedAd = factory(root.Dynamix.ApiClient, root.Dynamix.Ad);
  }
}(this, function(ApiClient, Ad) {
  'use strict';




  /**
   * The ReleasedAd model module.
   * @module model/ReleasedAd
   * @version v0.1.0
   */

  /**
   * Constructs a new <code>ReleasedAd</code>.
   * @alias module:model/ReleasedAd
   * @class
   * @param ad {module:model/Ad} Ad contents. This is what stores the ad delivery information.
   * @param adRid {String} 
   * @param popQueryParams {String} 
   */
  var exports = function(ad, adRid, popQueryParams) {
    var _this = this;

    _this['ad'] = ad;
    _this['adRid'] = adRid;
    _this['popQueryParams'] = popQueryParams;
  };

  /**
   * Constructs a <code>ReleasedAd</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReleasedAd} obj Optional instance to populate.
   * @return {module:model/ReleasedAd} The populated <code>ReleasedAd</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ad')) {
        obj['ad'] = Ad.constructFromObject(data['ad']);
      }
      if (data.hasOwnProperty('adRid')) {
        obj['adRid'] = ApiClient.convertToType(data['adRid'], 'String');
      }
      if (data.hasOwnProperty('popQueryParams')) {
        obj['popQueryParams'] = ApiClient.convertToType(data['popQueryParams'], 'String');
      }
    }
    return obj;
  }

  /**
   * Ad contents. This is what stores the ad delivery information.
   * @member {module:model/Ad} ad
   */
  exports.prototype['ad'] = undefined;
  /**
   * @member {String} adRid
   */
  exports.prototype['adRid'] = undefined;
  /**
   * @member {String} popQueryParams
   */
  exports.prototype['popQueryParams'] = undefined;



  return exports;
}));


