/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

export default getDisplayName;