import { Request, Response } from "express";
import { Overtime } from "../entities/Overtime";
import { OvertimeValidation } from "../entities/validations/OvertimeValidation";
import { OvertimesService } from "../services/OvertimesService";
import { UsersService } from "../services/UsersService";

export class OvertimeController {

    async create(httpRequest: Request, httpResponse: Response) {
        try {
            const overtimesService = new OvertimesService();
            const usersService = new UsersService();

            const overtimeValidation = new OvertimeValidation(httpRequest.body);
            overtimeValidation.validate();

            const { date, start_time, end_time, description, user_email } = httpRequest.body;

            // Buscar os dados do usuário
            const user = await usersService.findByEmail(user_email);

            if(!user) {
                throw new Error("Cadê");
            }

            const overtime = new Overtime();
            overtime.date = date;
            overtime.start_time = start_time;
            overtime.end_time = end_time;
            overtime.description = description;
            overtime.user = user_email;


            const overtimeSaved = overtimesService.create()

            httpResponse.json({ data: overtimeSaved});
        } catch(e) {
            httpResponse.json({error: `${e}`});
        }
    }
}