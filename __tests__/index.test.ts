import { hello } from '../src';

test('should return "Hello World"', () => {
    expect(hello()).toBe('Hello World');
});