import { Overtime } from '../entity/Overtime';
import { User } from '../entity/User';
import { IOvertimeRepository } from '../repository/IOvertimeRepository';

class GetOvertimesByUser {
    overtimeRepository: IOvertimeRepository;

    constructor(overtimeRepository: IOvertimeRepository) {
		this.overtimeRepository = overtimeRepository;
	}

    async execute(user: User) {
      return this.overtimeRepository.getOvertimesByUser(user);
    }
}

export { GetOvertimesByUser }