import { createComponentVNode, normalizeProps } from 'inferno';
/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import createHelper from './createHelper';

var renderComponent = function renderComponent(Component) {
  return function () {
    var RenderComponent = function RenderComponent(props) {
      return normalizeProps(createComponentVNode(2, Component, Object.assign({}, props)));
    };
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable global-require */
      var wrapDisplayName = require('./wrapDisplayName').default;
      /* eslint-enable global-require */
      RenderComponent.displayName = wrapDisplayName(Component, 'renderComponent');
    }
    return RenderComponent;
  };
};

export default createHelper(renderComponent, 'renderComponent', false);