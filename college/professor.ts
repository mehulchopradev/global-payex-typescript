import CollegeUser from "./college_user";
import SalariedIndividual from "../abc/salary-processor/salaried_individual";

export default class Professor extends CollegeUser implements SalariedIndividual {
  // instance attributes
  subjects: string[] = [];
  noOfDaysWorked: number = 0;
  costPerDay: number = 0;

  constructor(name?: string, gender?: string, subjects?: string[],
      noOfDaysWorked?: number, costPerDay?: number) {
    super(name, gender);

    if (subjects) {
      this.subjects = subjects;
    }

    if (noOfDaysWorked) {
      this.noOfDaysWorked = noOfDaysWorked;
    }

    if (costPerDay) {
      this.costPerDay = costPerDay;
    }
  }

  getPerDayCost(): number {
    return this.costPerDay;
  }

  getDaysWorkedInMonth(): number {
    return this.noOfDaysWorked;
  }
}