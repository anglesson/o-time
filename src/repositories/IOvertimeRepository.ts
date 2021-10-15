import { Overtime } from "../entities/Overtime";
import { User } from "../entities/User";

export interface IOvertimeRepository {
    save(overtime: Overtime): Promise<Overtime>;
    //getOvertimesByUser(user: User): Array<Overtime>;
    //getAllOvertimes(): Array<Overtime>;
}