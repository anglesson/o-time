import { Request, Response } from "express";
import { Overtime } from "../entities/Overtime";
import { OvertimeValidation } from "../entities/validations/OvertimeValidation";
import { OvertimesService } from "../services/OvertimesService";
import { UsersService } from "../services/UsersService";

export class OvertimeController {

    async show(httpRequest: Request, httpResponse: Response) {
        const { id } = httpRequest.params;
        const overtimesService = new OvertimesService();
        const overtime = await overtimesService.findById(id);
        httpResponse.json({ data: overtime });
    }

    async create(httpRequest: Request, httpResponse: Response) {
        try {
            const overtimesService = new OvertimesService();
            const usersService = new UsersService();

            const overtimeValidation = new OvertimeValidation(httpRequest.body);
            overtimeValidation.validate();

            const { date, start_time, end_time, description, user_email } = httpRequest.body;

            const user = await usersService.findByEmail(user_email);

            if(!user) {
                throw new Error("Usuário não cadastrado.");
            }

            const overtime = new Overtime();
            overtime.date = date;
            overtime.start_time = start_time;
            overtime.end_time = end_time;
            overtime.description = description;
            overtime.user = user;

            const overtimeSaved = await overtimesService.create(overtime)

            httpResponse.json({ data: overtimeSaved});
        } catch(e) {
            httpResponse.json({error: `${e}`});
        }
    }

    async update(httpRequest: Request, httpResponse: Response) {
        try {
            const { id } = httpRequest.params;
            
            const { date, start_time, end_time, description } = httpRequest.body;

            const overtimesService = new OvertimesService();
            const overtimeFinded = await overtimesService.findById(id);

            const acceptableFields = ['date', 'start_time', 'end_time', 'description'];

            for (let i = 0; i < httpRequest.body.lenght; i++) {
                console.log('chs')
            }

            for (const field of acceptableFields) {
                if(!httpRequest.body[field]) {
                    throw new Error(`O parametro ${field} é obrigatório.`);
                }
            }

            overtimeFinded.date = date;
            overtimeFinded.start_time = start_time;
            overtimeFinded.end_time = end_time;
            overtimeFinded.description = description;

            console.log(overtimeFinded)
            
            await overtimesService.update(id, overtimeFinded);
            httpResponse.json({ data: overtimeFinded });
        } catch(e) {
            httpResponse.json({error: `${e}`});
        }
    }

    async getAll(httpRequest: Request, httpResponse: Response) {
        const overtimesService = new OvertimesService();
        const overtimes = await overtimesService.getAll();
        httpResponse.json({ data: overtimes });
    }

    async destroy(httpRequest: Request, httpResponse: Response) {
        try {
            const { id } = httpRequest.params;
            const overtimesService = new OvertimesService();

            const overtime = await overtimesService.findById(id);

            if (!overtime) {
                throw new Error("Hora extra não encontrada.");
            }

            await overtimesService.delete(id);
    
            httpResponse.status(204).json();
        } catch (error) {
            httpResponse.json({error: `${error}`});
        }
    }
}