/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import xstream from 'xstream';  // eslint-disable-line import/no-unresolved

const noop = () => { };

const config = {
  fromESObservable: observable =>
    xstream.create({
      subscription: null,
      start(listener) {
        this.subscription = observable.subscribe(listener);
      },
      stop() {
        this.subscription.unsubscribe();
      },
    }),
  toESObservable: stream => ({
    subscribe: observer => {
      const listener = {
        next: observer.next || noop,
        error: observer.error || noop,
        complete: observer.complete || noop,
      };
      stream.addListener(listener);
      return {
        unsubscribe: () => stream.removeListener(listener),
      };
    },
    [$$observable]() {
      return this;
    },
  }),
};

export default config;