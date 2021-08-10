import { Overtime } from '../../entity/Overtime';
import { User } from '../../entity/User';
import { GetOvertimesByUserDTO } from '../GetOvertimesByUser/GetOvertimesByUserDTO';
import { IOvertimeRepository } from '../../repository/IOvertimeRepository';

class GetOvertimesByUser {
    overtimeRepository: IOvertimeRepository;

    constructor(overtimeRepository: IOvertimeRepository) {
		this.overtimeRepository = overtimeRepository;
	}

    async execute(data: GetOvertimesByUserDTO) {
      const user = new User(data.name, data.email)
      return this.overtimeRepository.getOvertimesByUser(user);
    }
}

export { GetOvertimesByUser }