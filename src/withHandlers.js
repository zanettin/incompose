/**
 * @file   withHandlers
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */

export default (handlerCreators) => (component) => (props) => {

  const composed = Object.keys(handlerCreators).reduce((acc, key) => {
    acc[key] = handlerCreators[key](props);
    return acc;
  },{});

  return component({...props, ...composed});
};
