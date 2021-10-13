import { Overtime } from "../models/Overtime";
import { User } from "../models/User";

export interface IOvertimeRepository {
    save(overtime: Overtime): Overtime;
    getOvertimesByUser(user: User): Array<Overtime>;
    getAllOvertimes(): Array<Overtime>;
}