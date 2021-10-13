import { Request, Response } from "express";
import { Overtime } from "../models/Overtime";
import { User } from "../models/User";
import { IOvertimeRepository } from "../repository/IOvertimeRepository";

export class OvertimeController {
    private overtimeRepository: IOvertimeRepository;

    constructor(overtimeRepository: IOvertimeRepository) {
        this.overtimeRepository = overtimeRepository;
    }

    async create(req: Request, res: Response) {
        try {
            let user = new User("Anglesson", "anglesson@email.com.br");
            const {date, start_time, end_time, description} = req.body;
            const overtime = new Overtime(date, start_time, end_time, description, user);

            this.overtimeRepository.save(overtime);

            //res.json({ data: overtimeSaved});
        } catch(e) {
            res.json({error: `${e}`});
        }
    }
}