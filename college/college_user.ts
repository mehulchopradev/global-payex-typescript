export default class CollegeUser {
  name: string = 'NA';
  gender: string = '';

  constructor(name?: string, gender?: string) {
    // this --> Student, Professor, subclass object of CollegeUser
    if (name) {
      this.name = name;
    }

    if (gender) {
      this.gender = gender;
    }
  }

  getDetails(): string {
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}