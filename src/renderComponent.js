/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import createHelper from './createHelper';

const renderComponent = Component => () => {
	const RenderComponent = props => <Component {...props} />;
	if (process.env.NODE_ENV !== 'production') {
		/* eslint-disable global-require */
		const wrapDisplayName = require('./wrapDisplayName').default;
		/* eslint-enable global-require */
		RenderComponent.displayName = wrapDisplayName(Component, 'renderComponent');
	}
	return RenderComponent;
};

export default createHelper(renderComponent, 'renderComponent', false);
