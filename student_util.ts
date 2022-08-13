import Student from './college/student';
import { groupBy, meanBy } from 'lodash';

export default function genderWiseAverage(students: Student[]): number[] {
  const genderMap = groupBy(students, 'gender');

  return [
    meanBy(genderMap['m'], 'marks'),
    meanBy(genderMap['f'], 'marks')
  ]
}