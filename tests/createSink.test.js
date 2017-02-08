import createSink from '../src/createSink';

test('should call callback, everytime the base props change', () => {

  const cb    = jest.fn();
  const props = {check : 'okay'};

  const handler = createSink(cb)(props);

  expect(cb.mock.calls[0][0]).toEqual(props);

});
