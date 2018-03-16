/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Kefir from 'kefir'; // eslint-disable-line import/no-unresolved

const config = {
	fromESObservable: Kefir.fromESObservable,
	toESObservable: stream => stream.toESObservable(),
};

export default config;
