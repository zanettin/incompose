/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { from, Stream } from 'most'; // eslint-disable-line import/no-unresolved

const config = {
	fromESObservable: from || Stream.from,
	toESObservable: stream => stream,
};

export default config;
