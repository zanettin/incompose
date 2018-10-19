import mapProps from '../src/mapProps';

const originalProps = {
	a: 1,
	b: 2,
	c: 3,
};

const mappedProps = {
	d: 3,
	e: 6,
};

const component = props => props;

const mapper = ({ a, b, c }) => ({
	d: a + b,
	e: c * 2,
});

test('should map components original props to different props', () => {
	const props = mapProps(mapper)(component)(originalProps);
	expect(props).toEqual(mappedProps);
});
