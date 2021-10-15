import { getCustomRepository, getRepository, Repository } from "typeorm";
import { Overtime } from "../entities/Overtime";
import { OvertimeRepository } from "../repositories/OvertimeRepository";

export class OvertimesService {
  private overtimesRepository: Repository<Overtime>;

  constructor() {
    this.overtimesRepository = getCustomRepository(OvertimeRepository)
  }

  async create(overtime: Overtime): Promise<Overtime> {
    return await this.overtimesRepository.save(overtime);
  }

  async findById(id: string): Promise<Overtime> {
    return await this.overtimesRepository.findOne(id, {
      relations: ['user']
    });
  }

  async update(id: string, overtime: Overtime): Promise<Overtime> {
    await this.overtimesRepository.update(id, overtime);
    return this.findById(id);
  }

  async getAll(): Promise<Overtime[]> {
    return await this.overtimesRepository.find({
      relations: ['user']
    });
  }
}