import { Overtime } from "../entity/Overtime";
import { User } from "../entity/User";

interface IOvertimeRepository {
  saveOvertime(overtime: Overtime): void;
  getAllOvertimes(): Array<Overtime>;
  getOvertimesByUser(user: User): Array<Overtime>;
  sendReportsOvertimes(): Promise<void>;
  changeShippingStatus(overtime: Array<Overtime>): void;
}

export { IOvertimeRepository }