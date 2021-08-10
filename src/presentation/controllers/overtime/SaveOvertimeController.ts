import { SaveOvertime } from "../../../domain/usecase/SaveOvertime/SaveOvertime";
import { MissingParamError } from "../../errors";
import { badRequest, serverError } from "../../helpers/http-helpers";
import { success } from "../../helpers/http-helpers";
import { IController } from "../../protocols/IController";
import { IHttpRequest } from "../../protocols/IHttpRequest";
import { IHttpResponse } from "../../protocols/IHttpResponse";

export class SaveOvertimeController implements IController {

  saveOvertime: SaveOvertime;

  constructor(saveOvertime: SaveOvertime) {
    this.saveOvertime = saveOvertime;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      // Add middleware to get user's request
      const user = {name: "Anglesson", email: "anglesson.araujo@aric.com.br"}
      const requiredFields = ['date', 'start_time', 'end_time', 'description']
      
      const { date, start_time, end_time, description } = httpRequest.body;

      for (const field of requiredFields) {
        if(!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      this.saveOvertime.execute(date, start_time, end_time, description, user);
  
      return success({message: "Created"});
    } catch (error) {
      return serverError()
    }
  }
}