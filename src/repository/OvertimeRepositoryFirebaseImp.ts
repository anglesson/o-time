import { Overtime } from "../entities/Overtime";
import { IOvertimeRepository } from "./IOvertimeRepository";
import { firestore }  from "../db/firebase";

export class OvertimeRepositoryFirebaseImp implements IOvertimeRepository{
    async save(overtime: Overtime): Promise<Overtime> {

        const overtimeData = {
            date: overtime.getDate(),
            description: overtime.getDescription(),
            end_time: overtime.getEndTime(),
            start_time: overtime.getStartTime()
        }

        const userData = {
            name: overtime.getUser().name,
            email: overtime.getUser().email
        }

        await firestore.collection('overtimes').doc('teste').set(overtimeData)
        await firestore.collection('users').doc('teste').set(userData)
        
        return overtime;
    }
}