export class Employee {
    Id: number;
    Name: string;
    Age: number;
    JoiningDate: string = ""

    constructor(id: number, name: string, age: number) {
      this.Id = id;
      this.Name = name;
      this.Age = age;
    }
}
