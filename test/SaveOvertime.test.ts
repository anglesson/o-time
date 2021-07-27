import { OvertimeRepositoryMock } from "../src/infra/repository/OvertimeRepositoryMock";
import { SaveOvertime } from "../src/domain/usecase/SaveOvertime";
import { User } from "../src/domain/entity/User";

test('Save Overtime', async function() {
  const overtimeRepositoryMock = new OvertimeRepositoryMock();
  const saveOvertime = new SaveOvertime(overtimeRepositoryMock);

  let date = new Date();
  let start_time = new Date();
  let end_time = new Date();
  let description = "Atualização de Base...";
  let user = new User("Adinho", "adson.souza@aric.com.br");
  saveOvertime.execute(date, start_time, end_time, description, user);

  const overtimesRecuoerados = overtimeRepositoryMock.getAllOvertimes();

  console.log(overtimesRecuoerados);
});