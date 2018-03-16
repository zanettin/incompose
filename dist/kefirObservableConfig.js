/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Kefir from 'kefir'; // eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: Kefir.fromESObservable,
  toESObservable: function toESObservable(stream) {
    return stream.toESObservable();
  }
};

export default config;