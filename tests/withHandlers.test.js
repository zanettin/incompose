import withHandlers from '../src/withHandlers';

const originalProps = {
	check: 'yup',
	a: 1,
	b: 2,
};

const withTestHandlers = {
	doTest: props => `successful? ${props.check}`,
	getSum: props => () => props.a + props.b,
};

const component = props => ({ props });

test('should add handler creators and enrich them with props', () => {
	const { props } = withHandlers(withTestHandlers)(component)(originalProps);

	expect(props.doTest).toEqual('successful? yup');
	expect(props.getSum()).toBe(3);
});
