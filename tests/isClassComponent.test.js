import Inferno from 'inferno';
import Component from 'inferno-component';
import isClassComponent from '../src/isClassComponent';

class TestClassComponent extends Component {
  render() {
    return <div>Soup</div>;
  }
}

const TestFunctionalComponent = (props) => <div>{props.soup}</div>;

test('returns true for a class component', () => {
  expect(isClassComponent(TestClassComponent)).toBe(true);
});

test('returns false for a functional component', () => {
  expect(isClassComponent(TestFunctionalComponent)).toBe(false);
});

test('returns false for a prototype', () => {
  function Foo() {};
  const foo = new Foo();

  expect(isClassComponent(foo)).toBe(false);
});

test('returns false for a different class', () => {
  class Foo {}
  class Bar extends Foo {}

  expect(isClassComponent(Bar)).toBe(false);
});
