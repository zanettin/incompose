import withProps from '../src/withProps';

const originalProps = {
	a: 1,
	b: 2,
	c: 3,
};

const additionalProps = {
	a: 10, // overwrite original
	b: 20, // overwrite original
	d: 4, // extends original
};

const component = props => props;

test('should add additional props to components original props', () => {
	const props = withProps(additionalProps)(component)(originalProps);
	expect(props).toEqual({
		a: 10,
		b: 20,
		c: 3,
		d: 4,
	});
});
