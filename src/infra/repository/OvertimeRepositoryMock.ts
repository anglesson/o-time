import { Overtime } from "../../domain/entity/Overtime";
import { User } from "../../domain/entity/User";
import { OvertimeRepository } from "../../domain/repository/OvertimeRepository";

class OvertimeRepositoryMock implements OvertimeRepository {

  private overtimes: Array<Overtime>;

  constructor(){
    this.overtimes = [];
  }

  saveOvertime(overtime: Overtime) {
    this.overtimes.push(overtime);
  }

  getAllOvertimes(user: User) {
    return this.overtimes.filter((overtime) => { return overtime.user == user });
  }
}

export { OvertimeRepositoryMock }