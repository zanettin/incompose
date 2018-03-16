/**
 * @file   createSink
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-08
 */

export default (callback = () => null) => (props = {}) => {
	callback(props);
	return null;
};
