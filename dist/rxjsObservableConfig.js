/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Rx from 'rxjs'; // eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: Rx.Observable.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
};

export default config;