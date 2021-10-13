import { OvertimeRepositoryFirebaseImp } from "../src/repository/OvertimeRepositoryFirebaseImp";
import { User } from "../src/entities/User";
import { Overtime } from "../src/entities/Overtime";

test('Create Overtime', async function() {
  const overtimeRepositoryFirebaseImp = new OvertimeRepositoryFirebaseImp();

  let date = new Date();
  let start_time = new Date();
  let end_time = new Date();
  let description = "Atualização de Base...";
  let user = new User("Adinho", "adson.souza@aric.com.br");
  
  const overtime = new Overtime(date, start_time, end_time, description, user);
  overtimeRepositoryFirebaseImp.save(overtime);
});