/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Rx from 'rxjs'; // eslint-disable-line import/no-unresolved

const config = {
  fromESObservable: Rx.Observable.from,
  toESObservable: stream => stream,
};

export default config;