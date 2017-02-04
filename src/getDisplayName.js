/**
 * @author recompose (https://github.com/acdlite/recompose)
 * @flow
 */

const getDisplayName = Component => {
  if (typeof Component === 'string') {
    return Component
  }

  if (!Component) {
    return undefined
  }

  return Component.displayName || Component.name || 'Component'
}

export default getDisplayName