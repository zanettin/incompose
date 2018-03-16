import { createComponentVNode, normalizeProps } from 'inferno';
/**
 * @file   nest
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-12
 */

import Inferno from 'inferno';

export default (function () {
	for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
		Components[_key] = arguments[_key];
	}

	return function (props) {
		if (!Components || Components.length < 1) {
			return null;
		}

		var MainComponent = Components[0];
		var components = Components.reverse();
		var propsMap = components.map(function (Component, index) {
			var PrevComponent = components[index - 1] || null;
			var nextProps = props;

			if (PrevComponent !== null) {
				nextProps.children = normalizeProps(createComponentVNode(2, PrevComponent, Object.assign({}, nextProps)));
			}

			return nextProps;
		});

		return MainComponent(propsMap.reverse()[0]);
	};
});