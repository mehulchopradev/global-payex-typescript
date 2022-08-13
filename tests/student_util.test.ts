import { describe, it } from 'mocha';
import chai from 'chai';

import genderWiseAverage from '../student_util';
import Student from '../college/student';

const expect = chai.expect;

describe('student util test suite', () => {
  it('it performs the average gender wise', () => {
    const actual = genderWiseAverage(
      [
        new Student('mehul', 'm', 10, 90),
        new Student('jane', 'f', 13, 98),
        new Student('jill', 'f', 14, 78),
        new Student('john', 'm', 15, 80),
      ]
    );
    // M -> 85
    // F -> 88
    expect(actual[0]).to.equal(85);
    expect(actual[1]).to.equal(88);
  });
});