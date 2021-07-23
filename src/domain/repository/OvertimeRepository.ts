import { Overtime } from "../entity/Overtime";

interface OvertimeRepository {
  saveOvertime(overtime: Overtime): void;
}

export { OvertimeRepository }