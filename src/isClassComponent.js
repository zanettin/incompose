/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

// todo: find a way to detect inferno classes!! prototype.render is a indice
const isClassComponent = Component => Boolean(
  Component &&
  Component.prototype &&
  typeof Component.prototype.render === 'function'
);

export default isClassComponent;