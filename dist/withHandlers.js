/**
 * @file   withHandlers
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */

export default (function (handlerCreators) {
  return function (component) {
    return function (props) {

      var composed = Object.keys(handlerCreators).reduce(function (acc, key) {
        acc[key] = handlerCreators[key](props);
        return acc;
      }, {});

      return component(Object.assign({}, props, composed));
    };
  };
});