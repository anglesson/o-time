import { OvertimeRepository } from "../repository/OvertimeRepository";
import { User } from "../entity/User";
import { Overtime } from "../entity/Overtime";

class SaveOvertime {
	overtimeRepository: OvertimeRepository;

	constructor(overtimeRepository: OvertimeRepository) {
		this.overtimeRepository = overtimeRepository;
	}

	async execute(
		date: Date,
		start_time: Date,
		end_time: Date,
		description: string,
		shipping_status: boolean,
		user: User
	) {
		const overtime = new Overtime(
			date,
			start_time,
			end_time,
			description,
			shipping_status,
			user
		);
    this.overtimeRepository.saveOvertime(overtime);
	}
}

export { SaveOvertime };
