/**
 * @file   createSink
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-08
 */

export default (function () {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    callback(props);
    return null;
  };
});