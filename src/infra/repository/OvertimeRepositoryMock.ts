import { Overtime } from "../../domain/entity/Overtime";
import { OvertimeRepository } from "../../domain/repository/OvertimeRepository";

class OvertimeRepositoryMock implements OvertimeRepository {

  private overtimes: Array<Overtime>;

  constructor(){
    this.overtimes = [];
  }

  saveOvertime(overtime: Overtime) {
    this.overtimes.push(overtime);
  }

  getAllOvertimes() {
    return this.overtimes;
  }
}

export { OvertimeRepositoryMock }