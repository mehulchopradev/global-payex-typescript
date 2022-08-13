import chai from 'chai';
import { describe, it } from 'mocha';
import Student from '../college/student';

const expect = chai.expect;

describe('Student test suite', function () {
  it('returns the expected value from getDetails method', function() {
    const s1 = new Student('mehul', 'm', 10, 90);
    const actual = s1.getDetails();
    const expected = 'Name: mehul\nGender: m\nRoll: 10\nMarks: 90';
    expect(actual).to.equal(expected);
  });
});