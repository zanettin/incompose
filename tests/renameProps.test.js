import renameProps from '../src/renameProps';

const originalProps = {
	a: 1,
	b: 2,
	c: 3,
};

const component = props => props;

test('should rename prop `a` to `z` and `b` to `y`', () => {
	const props = renameProps({ a: 'z', b: 'y' })(component)(originalProps);
	expect(props).toEqual({
		z: 1,
		y: 2,
		c: 3,
	});
});
