import { FizzBuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        expect(FizzBuzz(3)).toBe("Fizz");
    });
    test('should return Buzz', () => {
        expect(FizzBuzz(5)).toBe("Buzz");
    });
    test('should return FizzBuzz', () => {
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    });
    test('should return 1', () => {
        expect(FizzBuzz(1)).toBe(1);
    });
    test('should return 4', () => {
        expect(FizzBuzz(4)).toBe(4);
    });
});