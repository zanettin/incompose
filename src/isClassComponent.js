/**
 * @author recompose (https://github.com/acdlite/recompose)
 * @flow
 */

const isClassComponent = Component => Boolean(
  Component &&
  Component.prototype &&
  typeof Component.prototype.isReactComponent === 'object'
)

export default isClassComponent