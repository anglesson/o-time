import { OvertimeRepositoryMock } from "../src/infra/repository/OvertimeRepositoryMock";
import { SaveOvertime } from "../src/domain/usecase/SaveOvertime";
import { GetOvertimesByUser } from '../src/domain/usecase/GetOvertimesByUser';
import { User } from "../src/domain/entity/User";
import { SendReportsOvertime } from "../src/domain/usecase/SendReportsOvertime";
import { MailtrapMailProvider } from "../src/infra/providers/MailtrapMailProvider";

test('Save Overtime', async function() {
  const overtimeRepositoryMock = new OvertimeRepositoryMock();
  const saveOvertime = new SaveOvertime(overtimeRepositoryMock);

  let date = new Date();
  let start_time = new Date();
  let end_time = new Date();
  let description = "Atualização de Base...";
  let user = new User("Adinho", "adson.souza@aric.com.br");
  let user2 = new User("Anglesson", "anglesson.araujo@aric.com.br");
  saveOvertime.execute(date, start_time, end_time, description, user);
  saveOvertime.execute(date, start_time, end_time, description, user2);
});