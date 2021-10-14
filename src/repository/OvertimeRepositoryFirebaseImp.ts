import { Overtime } from "../entities/Overtime";
import { IOvertimeRepository } from "./IOvertimeRepository";
import { db, set, ref }  from "../db/firebase";

export class OvertimeRepositoryFirebaseImp implements IOvertimeRepository{
    async save(overtime: Overtime): Promise<Overtime> {

        const overtimeData = {
            date: overtime.getDate(),
            description: overtime.getDescription(),
            end_time: overtime.getEndTime(),
            start_time: overtime.getStartTime(),
            user: {
                name: overtime.getUser().name,
                email: overtime.getUser().email
            }
        }

        const retorno = await set(ref(db, 'overtimes/' + overtime.getId()), overtimeData);

        console.log(retorno);
    
        return overtime;
    }
}