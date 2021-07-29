import { Overtime } from "../entity/Overtime";
import { User } from "../entity/User";

interface OvertimeRepository {
  saveOvertime(overtime: Overtime): void;
  getAllOvertimes(user: User): Array<Overtime>;
}

export { OvertimeRepository }