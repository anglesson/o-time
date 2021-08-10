import { SaveOvertime } from "../../../domain/usecase/SaveOvertime/SaveOvertime"
import { OvertimeRepositoryMock } from "../../../infra/repository/OvertimeRepositoryMock"
import { SaveOvertimeController } from "./SaveOvertimeController"

describe('SaveOvertime Controller', () => {
  test('Return 400 if Description is not provided', async () => {
    const httpRequest = {
      body: { 
        start_time: '21:00', 
        end_time: '23:00', 
        date: '21/03/2022'
      }
    }
    const db = new OvertimeRepositoryMock();
    const saveOvertimeCase = new SaveOvertime(db);
    const sut = new SaveOvertimeController(saveOvertimeCase)

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400)
  })

  test('Return 400 if date is not provided', async () => {
    const httpRequest = {
      body: {
        description: 'description',
        start_time: '21:00', 
        end_time: '23:00'
      }
    }
    const db = new OvertimeRepositoryMock();
    const saveOvertimeCase = new SaveOvertime(db);
    const sut = new SaveOvertimeController(saveOvertimeCase)

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400)
  })
})