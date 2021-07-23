import { Overtime } from "../entity/Overtime";

interface OvertimeRepository {
  saveOvertime(overtime: Overtime): void;
  getAllOvertimes(): Array<Overtime>;
}

export { OvertimeRepository }