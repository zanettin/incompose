/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

export default lifecycles => Component => {
	// avoid breaking changes by mapping class lifecycles to functional lifecycles
	const functionalLifecycles = {};

	if (lifecycles.componentWillMount) {
		functionalLifecycles.onComponentWillMount = lifecycles.componentWillMount;
	}
	if (lifecycles.componentDidMount) {
		functionalLifecycles.onComponentDidMount = lifecycles.componentDidMount;
	}
	if (lifecycles.shouldComponentUpdate) {
		functionalLifecycles.onComponentShouldUpdate =
			lifecycles.shouldComponentUpdate;
	}
	if (lifecycles.componentWillUpdate) {
		functionalLifecycles.onComponentWillUpdate = lifecycles.componentWillUpdate;
	}
	if (lifecycles.componentDidUpdate) {
		functionalLifecycles.onComponentDidUpdate = lifecycles.componentDidUpdate;
	}
	if (lifecycles.componentWillUnmount) {
		functionalLifecycles.onComponentWillUnmount =
			lifecycles.componentWillUnmount;
	}

	Component.defaultHooks = {
		...functionalLifecycles,
	};

	return Component;
};
