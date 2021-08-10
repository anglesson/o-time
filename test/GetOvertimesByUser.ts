import { User } from "../src/domain/entity/User";
import { GetOvertimesByUser } from "../src/domain/usecase/GetOvertimesByUser/GetOvertimesByUser";
import { GetOvertimesByUserDTO } from "../src/domain/usecase/GetOvertimesByUser/GetOvertimesByUserDTO";
import { SaveOvertime } from "../src/domain/usecase/SaveOvertime/SaveOvertime";
import { SendReportsOvertime } from "../src/domain/usecase/SendReportsOvertime";
import { MailtrapMailProvider } from "../src/infra/providers/MailtrapMailProvider";
import { OvertimeRepositoryMock } from "../src/infra/repository/OvertimeRepositoryMock";

test("Getting overtimes by user", async function() {
    try {
        const overtimeRepositoryMock = new OvertimeRepositoryMock();
        const mailProvider = new MailtrapMailProvider();
        const saveOvertime = new SaveOvertime(overtimeRepositoryMock);

        let date = new Date(Date.now());
        console.log(date.getDate());
        let start_time = new Date();
        start_time.setHours(20);
        let end_time = new Date();
        end_time.setHours(23);

        let description = "Atualização do Sistema RM TOTVS";

        const user: GetOvertimesByUserDTO = {        
          name: "Anglesson Araujo",
          email: "anglesson.araujo@aric.com.br"
        };

        saveOvertime.execute(date, start_time, end_time, description, user);

        const send = new SendReportsOvertime(overtimeRepositoryMock, mailProvider);
        const getOvertimesByUser = new GetOvertimesByUser(overtimeRepositoryMock);
        const res = await getOvertimesByUser.execute(user);
        await send.execute(user);
        console.log(res);
      } catch(e) {
        console.log(e);
      }
})