// average.test.js
import average from "../src/average";

// Test case 1: Average of [1, 2, 3] should be 2
describe('average()', () =>{
    it("should return NaN if the data is not an array",() =>{
        expect(average("foo")).toBeNaN();
    });
    it("should return NaN if the data is not an array of finite numbers",() =>{
        expect(average(["foo", 2, 3])).toBeNaN();
    });
    it("should return the average of an array of numbers",() =>{
        expect(average([1, 2, 3])).toBe(2);
    });
});
