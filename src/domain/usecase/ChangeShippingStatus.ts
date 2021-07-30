import { Overtime } from "../entity/Overtime";
import { IOvertimeRepository } from "../repository/IOvertimeRepository";

class ChangeShippingStatus {
    overtimeRepository: IOvertimeRepository;

    constructor(overtimeRepository: IOvertimeRepository) {
        this.overtimeRepository = overtimeRepository;
    }

    async execute(overtimes: Overtime[]) {
        this.overtimeRepository.changeShippingStatus(overtimes);
    }
}

export { ChangeShippingStatus }