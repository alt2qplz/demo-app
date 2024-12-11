import { classNames } from './classNames';

describe('classNames',() => {
  test('only cls', () => {
    expect(classNames('class')).toBe('class');
  });

  test('cls with additional', () => {
    const expected = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('cls with mods & additional', () => {
    const expected = 'class hovered scrollable class1 class2';
    expect(classNames('class', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'class hovered class1 class2';
    expect(classNames('class', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'class hovered class1 class2';
    expect(classNames('class', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});

