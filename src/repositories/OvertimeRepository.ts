import { EntityRepository, Repository } from "typeorm";
import { Overtime } from "../entities/Overtime";

@EntityRepository(Overtime)
export class OvertimeRepository extends Repository<Overtime> {}