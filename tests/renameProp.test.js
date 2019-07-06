import renameProp from '../src/renameProp';

const originalProps = {
	a: 1,
	b: 2,
	c: 3,
};

const component = props => ({ props });

test('should rename prop `a` to `z`', () => {
	const { props } = renameProp('a', 'z')(component)(originalProps);
	expect(props).toEqual({
		z: 1,
		b: 2,
		c: 3,
	});
});
