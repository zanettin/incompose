/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import flyd from 'flyd'; // eslint-disable-line import/no-unresolved

const noop = () => { };

const config = {
  fromESObservable: observable => {
    const stream = flyd.stream();
    const { unsubscribe } = observable.subscribe({
      next: value => stream(value),
      error: error => stream({ error }),
      complete: () => stream.end(true),
    });

    flyd.on(unsubscribe, stream.end);
    return stream;
  },

  toESObservable: stream => ({
    subscribe: observer => {
      const sub = flyd.on(observer.next || noop, stream);
      flyd.on(_ => observer.complete(), sub.end);  // eslint-disable-line no-unused-vars
      return {
        unsubscribe: () => sub.end(true),
      };
    },
    [$$observable]() {
      return this;
    },
  }),
};

export default config;