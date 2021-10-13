import { Overtime } from "../models/Overtime";
import { User } from "../models/User";
import { IOvertimeRepository } from "./IOvertimeRepository";

export class OvertimeRepositoryMock implements IOvertimeRepository {

  private overtimes: Array<Overtime>;

  constructor() {
    this.overtimes = [];
  }

  save(overtime: Overtime) {
    this.overtimes.push(overtime);
    return overtime;
  }

  getOvertimesByUser(user: User) {
    if( this.overtimes.length == 0 ){
      throw new Error("Não há horas cadastradas.")
    }
    return this.overtimes.filter((overtime) => { return overtime.getUser().email == user.email });
  }

  getAllOvertimes() {
    return this.overtimes;
  }

  sendReportsOvertimes() {
    return Promise.resolve();
  }

  changeShippingStatus(overtimes: Array<Overtime>) {
    overtimes.forEach((overtime) => {
      this.overtimes.map((overDB) => {
        if(overtime == overDB) {
          overDB.setShippingStatus(true);
        }
      })
    });
  }
}