import { getCustomRepository, getRepository, Repository } from "typeorm";
import { Overtime } from "../entities/Overtime";
import { OvertimeRepository } from "../repositories/OvertimeRepository";

export class OvertimesService {
  private overtimesRepository: Repository<Overtime>;

  constructor() {
    this.overtimesRepository = getCustomRepository(OvertimeRepository)
  }

  async create() {
    
  }
}