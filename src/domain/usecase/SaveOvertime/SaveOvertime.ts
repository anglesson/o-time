import { IOvertimeRepository } from "../../repository/IOvertimeRepository";
import { User } from "../../entity/User";
import { Overtime } from "../../entity/Overtime";

class SaveOvertime {
	overtimeRepository: IOvertimeRepository;

	constructor(overtimeRepository: IOvertimeRepository) {
		this.overtimeRepository = overtimeRepository;
	}

	async execute(
		date: Date,
		start_time: Date,
		end_time: Date,
		description: string,
		user: User
	) {
		const overtime = new Overtime(
			date,
			start_time,
			end_time,
			description,
			user
		);
    this.overtimeRepository.saveOvertime(overtime);
	}
}

export { SaveOvertime };
