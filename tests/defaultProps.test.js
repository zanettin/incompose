import defaultProps from '../src/defaultProps';

const originalProps = {
  a : 1,
  b : 2,
  c : 3,
};

const defaultPropsValues = {
  a : 10, // NO overwrite original
  b : 20, // NO overwrite original
  d : 4,  // extends original
};

const component = (props) => props;

test('should add additional props to components original props', () => {

  const props = defaultProps(defaultPropsValues)(component)(originalProps);
  expect(props).toEqual({
    a : 1,
    b : 2,
    c : 3,
    d : 4
  });

});
