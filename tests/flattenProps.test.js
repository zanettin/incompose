import flattenProps from '../src/flattenProps';

const originalProps = {
	object: { a: 1, b: 2 },
	c: 3,
};

const component = props => props;

test('should flatten prop `object`', () => {
	const props = flattenProps('object')(component)(originalProps);
	expect(props).toEqual({
		a: 1,
		b: 2,
		c: 3,
	});
});
