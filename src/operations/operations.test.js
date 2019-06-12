import { divide, multiply, sum, substract } from './operations';

it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
    expect(sum(2, 0)).toEqual(2);
  });

  it('substract numbers', () => {
    expect(substract(1, 2)).toEqual(-1);
    expect(substract(2, 2)).toEqual(0);
    expect(substract(2, 0)).toEqual(2);
  });

  it('multiply numbers', () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(2, 4)).toEqual(8);
    expect(multiply(2, 0)).toEqual(0);
  });


  it('divide numbers', () => {
    expect(divide(1, 2)).toEqual(0.5);
    expect(divide(4, 2)).toEqual(2);
    expect(divide(2, 0)).toEqual(Infinity);
    expect(divide(0, 2)).toEqual(0);
  });