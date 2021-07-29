import { User } from "../src/domain/entity/User";
import { GetOvertimesByUser } from "../src/domain/usecase/GetOvertimesByUser";
import { SaveOvertime } from "../src/domain/usecase/SaveOvertime";
import { SendReportsOvertime } from "../src/domain/usecase/SendReportsOvertime";
import { MailtrapMailProvider } from "../src/infra/providers/MailtrapMailProvider";
import { OvertimeRepositoryMock } from "../src/infra/repository/OvertimeRepositoryMock";

test("Getting overtimes by user", async function() {
    try {
        const overtimeRepositoryMock = new OvertimeRepositoryMock();
        const mailProvider = new MailtrapMailProvider();
        const saveOvertime = new SaveOvertime(overtimeRepositoryMock);

        let date = new Date();
        let start_time = new Date();
        start_time.setTime(22);
        let end_time = new Date();
        end_time.setTime(23);
        let description = "Atualização de Base 1234...";
        let user2 = new User("Anglesson", "anglesson.araujo@aric.com.br");
        saveOvertime.execute(date, start_time, end_time, description, user2);

        const send = new SendReportsOvertime(overtimeRepositoryMock, mailProvider);
        const getOvertimesByUser = new GetOvertimesByUser(overtimeRepositoryMock);
        const res = await getOvertimesByUser.execute(user2);
        await send.execute(user2);
        console.log(res);
      } catch(e) {
        console.log(e);
      }
})