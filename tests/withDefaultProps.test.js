import withDefaultProps from '../src/withDefaultProps';

const originalProps = {
  a : 1,
  b : 2,
  c : 3,
};

const defaultProps = {
  a : 10, // NO overwrite original
  b : 20, // NO overwrite original
  d : 4,  // extends original
};

const component = (props) => props;

test('should add additional props to components original props', () => {

  const props = withDefaultProps(defaultProps)(component)(originalProps);
  expect(props).toEqual({
    a : 1,
    b : 2,
    c : 3,
    d : 4
  });

});

