// source: StockFeed.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.org.price.stream.DateRange', null, global);
goog.exportSymbol('proto.org.price.stream.PriceUpdate', null, global);
goog.exportSymbol('proto.org.price.stream.StockRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.price.stream.PriceUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.price.stream.PriceUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.price.stream.PriceUpdate.displayName = 'proto.org.price.stream.PriceUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.price.stream.StockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.price.stream.StockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.price.stream.StockRequest.displayName = 'proto.org.price.stream.StockRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.price.stream.PriceUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.org.price.stream.PriceUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.price.stream.PriceUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.price.stream.PriceUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
date: jspb.Message.getFieldWithDefault(msg, 1, ""),
open: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
high: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
low: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
close: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
volume: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.price.stream.PriceUpdate}
 */
proto.org.price.stream.PriceUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.price.stream.PriceUpdate;
  return proto.org.price.stream.PriceUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.price.stream.PriceUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.price.stream.PriceUpdate}
 */
proto.org.price.stream.PriceUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHigh(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClose(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.price.stream.PriceUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.price.stream.PriceUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.price.stream.PriceUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.price.stream.PriceUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLow();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getClose();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.org.price.stream.PriceUpdate.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double open = 2;
 * @return {number}
 */
proto.org.price.stream.PriceUpdate.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double high = 3;
 * @return {number}
 */
proto.org.price.stream.PriceUpdate.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double low = 4;
 * @return {number}
 */
proto.org.price.stream.PriceUpdate.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double close = 5;
 * @return {number}
 */
proto.org.price.stream.PriceUpdate.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 volume = 6;
 * @return {number}
 */
proto.org.price.stream.PriceUpdate.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.price.stream.PriceUpdate} returns this
 */
proto.org.price.stream.PriceUpdate.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.price.stream.StockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.org.price.stream.StockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.price.stream.StockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.price.stream.StockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
dateRange: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.price.stream.StockRequest}
 */
proto.org.price.stream.StockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.price.stream.StockRequest;
  return proto.org.price.stream.StockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.price.stream.StockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.price.stream.StockRequest}
 */
proto.org.price.stream.StockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.org.price.stream.DateRange} */ (reader.readEnum());
      msg.setDateRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.price.stream.StockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.price.stream.StockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.price.stream.StockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.price.stream.StockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateRange();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.org.price.stream.StockRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.price.stream.StockRequest} returns this
 */
proto.org.price.stream.StockRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateRange date_range = 2;
 * @return {!proto.org.price.stream.DateRange}
 */
proto.org.price.stream.StockRequest.prototype.getDateRange = function() {
  return /** @type {!proto.org.price.stream.DateRange} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.org.price.stream.DateRange} value
 * @return {!proto.org.price.stream.StockRequest} returns this
 */
proto.org.price.stream.StockRequest.prototype.setDateRange = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.org.price.stream.DateRange = {
  ALL: 0,
  RECENT_MONTH: 1,
  ONE_YEAR: 2,
  FIVE_YEAR: 3
};

goog.object.extend(exports, proto.org.price.stream);
