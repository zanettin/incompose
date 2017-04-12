/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Component from 'inferno-component';

const isClassComponent = ComponentArg => Boolean(
  ComponentArg &&
  ComponentArg.prototype &&
  typeof ComponentArg.prototype.render === 'function' &&
  Component.isPrototypeOf(ComponentArg)
);

export default isClassComponent;
