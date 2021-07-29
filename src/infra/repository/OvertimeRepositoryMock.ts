import { Overtime } from "../../domain/entity/Overtime";
import { User } from "../../domain/entity/User";
import { IOvertimeRepository } from "../../domain/repository/IOvertimeRepository";

class OvertimeRepositoryMock implements IOvertimeRepository {

  private overtimes: Array<Overtime>;

  constructor(){
    this.overtimes = [];
  }

  saveOvertime(overtime: Overtime) {
    this.overtimes.push(overtime);
  }

  getOvertimesByUser(user: User) {
    if( this.overtimes.length == 0 ){
      throw new Error("Não há horas cadastradas.")
    }
    return this.overtimes.filter((overtime) => { return overtime.user.email == user.email });
  }

  getAllOvertimes() {
    return this.overtimes;
  }

  sendReportsOvertimes() {
    return Promise.resolve();
  }
}

export { OvertimeRepositoryMock }