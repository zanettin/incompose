/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { from, Stream } from 'most'; // eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: from || Stream.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
};

export default config;