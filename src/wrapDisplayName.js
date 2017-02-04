/**
 * @author recompose (https://github.com/acdlite/recompose)
 * @flow
 */

import getDisplayName from './getDisplayName'

const wrapDisplayName = (BaseComponent, hocName) =>
  `${hocName}(${getDisplayName(BaseComponent)})`

export default wrapDisplayName