import FizzBuzz from '../src/fizzbuzz';

describe('Fizzbuzz', () => {
    it('fizz() should return fizz if divisible by 3', () => {
        // Given
        const input = 3;
        const fizzbuzz = new FizzBuzz(input);

        const result = "fizz";

        // When
        const expected = fizzbuzz.fizz();

        // Then
        expect(result).toEqual(expected);
    })

    it('fizz() should return empty string if not divisible by 3', () => {
        // Given
        const input = 4;
        const fizzbuzz = new FizzBuzz(input);

        const result = "";

        // When
        const expected = fizzbuzz.fizz();

        // Then
        expect(result).toEqual(expected);
    })

    it('buzz() should return fizz if divisible by 5', () => {
        // Given
        const input = 5;
        const fizzbuzz = new FizzBuzz(input);

        const result = "buzz";

        // When
        const expected = fizzbuzz.buzz();

        // Then
        expect(result).toEqual(expected);
    })

    it('buzz() should return empty string if not divisible by 3', () => {
        // Given
        const input = 7;
        const fizzbuzz = new FizzBuzz(input);

        const result = "";

        // When
        const expected = fizzbuzz.buzz();

        // Then
        expect(result).toEqual(expected);
    })

    it('fizzbuzz() should return empty string if not divisible by 15', () => {
        // Given
        const input = 30;
        const fizzbuzz = new FizzBuzz(input);

        const result = "fizzbuzz";

        // When
        const expected = fizzbuzz.fizzbuzz();

        // Then
        expect(result).toEqual(expected);
    })

    it('fizzbuzz() should return original input if not divisable by 3 or 5 or 15', () => {
        // Given
        const input = 8;
        const fizzbuzz = new FizzBuzz(input);

        const result = "8";

        // When
        const expected = fizzbuzz.fizzbuzz();

        // Then
        expect(result).toEqual(expected);
    })

    it('fizzbuzz() should return fizz if divisible by 3', () => {
        // Given
        const input = 6;
        const fizzbuzz = new FizzBuzz(input);

        const result = "fizz";

        // When
        const expected = fizzbuzz.fizzbuzz();

        // Then
        expect(result).toEqual(expected);
    })

    it('fizzbuzz() should return fizz if divisible by 5', () => {
        // Given
        const input = 10;
        const fizzbuzz = new FizzBuzz(input);

        const result = "buzz";

        // When
        const expected = fizzbuzz.fizzbuzz();

        // Then
        expect(result).toEqual(expected);
    })
})
