import { Request, Response } from "express";
import { Overtime } from "../entities/Overtime";
import { User } from "../entities/User";
import { IOvertimeRepository } from "../repository/IOvertimeRepository";

export class OvertimeController {
    public overtimeRepository: IOvertimeRepository;

    constructor(overtimeRepository: IOvertimeRepository) {
        this.overtimeRepository = overtimeRepository;
        this.create = this.create.bind(this);
    }

    async create(req: Request, res: Response) {
        try {
            let user = new User("Anglesson", "anglesson@email.com.br");
            const {date, start_time, end_time, description} = req.body;
            const overtime = new Overtime(date, start_time, end_time, description, user);
            const overtimeSaved = await this.overtimeRepository.save(overtime);

            res.json({ data: overtimeSaved});
        } catch(e) {
            res.json({error: `${e}`});
        }
    }
}