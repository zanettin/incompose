/**
 * @file   nest
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-12
 */

import Inferno from 'inferno';

export default (...Components) => props => {
	if (!Components || Components.length < 1) {
		return null;
	}

	const MainComponent = Components[0];
	const components = Components.reverse();
	const propsMap = components.map((Component, index) => {
		const PrevComponent = components[index - 1] || null;
		const nextProps = props;

		if (PrevComponent !== null) {
			nextProps.children = <PrevComponent {...nextProps} />;
		}

		return nextProps;
	});

	return MainComponent(propsMap.reverse()[0]);
};
